"use client";

import React from "react";
import styled from "styled-components";
import LabelForm from "@/components/LabelForm";
import LabelList from "@/components/LabelList";
import { COLORS, SPACING, BREAKPOINTS } from "@/shared/constants/theme";

const Container = styled.div`
  min-height: 100vh;
  background: ${COLORS.gradients.main};
  padding: ${SPACING.lg};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${SPACING.xxl};
  color: white;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 ${SPACING.md} 0;
  color: #ffffff;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin: 0;
  opacity: 0.95;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: 1rem;
  }
`;

const MainContent = styled.main`
  display: grid;
  gap: ${SPACING.lg};
  animation: slideUp 0.6s ease-out;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: ${SPACING.xl};
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function Home() {
  return (
    <Container>
      <Content>
        <Header>
          <Title>Студия Этикеток</Title>
          <Subtitle>
            Профессиональный инструмент для создания стильных маркировок и
            этикеток
          </Subtitle>
        </Header>

        <MainContent>
          <LabelForm />
          <LabelList />
        </MainContent>
      </Content>
    </Container>
  );
}
