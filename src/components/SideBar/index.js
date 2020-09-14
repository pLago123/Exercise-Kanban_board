import React from 'react';
import { BiBell } from 'react-icons/bi';
import { RiDashboardLine } from 'react-icons/ri';
import { GrList } from 'react-icons/gr';
import { FiUsers } from 'react-icons/fi';

import {
  Container,
  TopButtonsWrapper,
  BottomButtonsWrapper,
  AvatarButton,
  NotificationsButton,
  DashTopButton,
  RegularTopButton,
} from './styles';

function SideBar() {
  return (
    <Container>
      <TopButtonsWrapper>
        <DashTopButton>
          <RiDashboardLine size={20} />
        </DashTopButton>
        <RegularTopButton>
          <FiUsers size={20} />
        </RegularTopButton>
        <RegularTopButton>
          <GrList size={20} />
        </RegularTopButton>
      </TopButtonsWrapper>
      <BottomButtonsWrapper>
        <NotificationsButton>
          <BiBell size={20} />
        </NotificationsButton>
        <AvatarButton>
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="icon"
          />
        </AvatarButton>
      </BottomButtonsWrapper>
    </Container>
  );
}

export default SideBar;
