import React, { useRef, useCallback, memo } from 'react';
import { CgClose } from 'react-icons/cg';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useModal } from '~/context/Modal';
import { useTasks } from '~/context/Tasks';
import CardBadges from '~/components/CardBadges';
import SelectInput from '~/components/SelectInput';
import Input from '~/components/Input';
import DateInput from '~/components/DateInput';
import getValidationErrors from '~/utils/getValidationErrors';

import {
  ModalContainer,
  ModalHeader,
  FormWrapper,
  FormBody,
  TypeDateWrapper,
  FormButton,
} from './styles';

const TaskForm = ({ id }) => {
  const { addTask } = useTasks();
  const { hideModal } = useModal();
  const data = Object.keys(CardBadges);
  const labels = Object.values(CardBadges).map((item, index) => (
    <>
      {item}
      {data[index]}
    </>
  ));
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        if (formRef.current) {
          formRef.current.setErrors({});
        }

        const schema = Yup.object().shape({
          type: Yup.string().required(),
          title: Yup.string().required(),
          content: Yup.string().required(),
          date: Yup.date().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addTask({
          columnId: id,
          type: data.type,
          title: data.title,
          content: data.content,
          date: data.date,
        });

        hideModal();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          if (formRef.current) {
            formRef.current.setErrors(errors);
          }

          return;
        }
      }
    },
    [addTask, id, hideModal]
  );

  return (
    <ModalContainer>
      <ModalHeader>
        <h2>Create a task</h2>
        <button onClick={() => hideModal()}>
          <CgClose size={20} />
        </button>
      </ModalHeader>
      <FormWrapper>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormBody>
            <TypeDateWrapper>
              <SelectInput name="type" data={data} labels={labels} />
              <DateInput name="date" />
            </TypeDateWrapper>
            <Input
              name="title"
              type="text"
              placeholder="Enter a title for the task"
            />
            <Input name="content" type="text" placeholder="Describe the task" />
            <FormButton>add task</FormButton>
          </FormBody>
        </Form>
      </FormWrapper>
    </ModalContainer>
  );
};

export default memo(TaskForm);
