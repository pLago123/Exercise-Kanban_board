import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { IoLogoNodejs } from 'react-icons/io';
import { HiOutlineCog } from 'react-icons/hi';

import {
  Container,
  NavBar,
  LeftSideWrapper,
  RightSideWrapper,
  ArrowLeftButton,
  Logo,
  ProjectInfo,
  CogButton,
} from './styles';

function Header() {
  return (
    <Container>
      <NavBar>
        <LeftSideWrapper>
          <ArrowLeftButton>
            <BsArrowLeftShort size={24} />
          </ArrowLeftButton>
          <Logo>
            <IoLogoNodejs size={26} />
          </Logo>
          <ProjectInfo>
            <h3>Kanban Board</h3>
            <p>In Progress</p>
          </ProjectInfo>
        </LeftSideWrapper>
        <RightSideWrapper>
          <CogButton>
            <HiOutlineCog size={24} />
          </CogButton>
        </RightSideWrapper>
      </NavBar>
    </Container>
  );
}

export default Header;
