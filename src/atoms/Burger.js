import React from 'react';
import styled from 'styled-components';

const Burger = () => (
  <div className="wrapper">
    <button className="nav">
      <span />
      <span />
      <span />
    </button>
  </div>
);

export default styled(Burger)`
  .wrapper {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .nav {
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    background-color: transparent;
    border-style: none;
    outline: none;
    cursor: pointer;
  }
  .nav span {
    width: 100%;
    height: 5px;
    background-color: #fff;
    display: block;
    position: absolute;
    border-radius: 2px;
    transition: all 0.5s ease;
  }
  .nav span:nth-child(1) {
    top: 0;
    left: 0;
  }
  .nav span:nth-child(2) {
    top: 20px;
    right: 0;
  }
  .nav span:nth-child(3) {
    top: 40px;
    left: 0;
  }
  .nav.open span:nth-child(2) {
    animation: span2 1.5s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  @keyframes span2 {
    0% {
      transform: translate(0, 0) scale(1);
    }
    20% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 0) scale(1);
    }
    40% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 0) scale(1);
    }
    50% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 18px) scale(1);
    }
    80% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, -16px) scale(1);
    }
    100% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 100px) scale(0);
    }
  }
  .nav.open span:nth-child(3) {
    animation: span3 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    animation-delay: 0.7s;
  }
  @keyframes span3 {
    0% {
      transform: translate(0, 0);
    }
    60% {
      transform: rotate(80deg) translate(-7px, -7px);
    }
    100% {
      transform: rotate(45deg) translate(-7px, -7px);
    }
  }
  .nav.open span:nth-child(1) {
    animation: span1 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    animation-delay: 1.1s;
  }
  @keyframes span1 {
    0% {
      transform: translate(0, 0);
    }
    60% {
      transform: rotate(-110deg) translate(-7px, -7px);
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
    }
  }
  .nav span:nth-child(1) {
    animation: span1_close 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  @keyframes span1_close {
    0% {
      transform: rotate(-45deg) translate(-20px, 20px);
    }
    100% {
      transform: rotate(0deg) translate(0, 0);
    }
  }
  .nav span:nth-child(2) {
    animation: span2_close 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  @keyframes span2_close {
    0% {
      transform: translate(0, 40px) scale(0);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }
  .nav span:nth-child(3) {
    animation: span3_close 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  @keyframes span3_close {
    0% {
      transform: rotate(45deg) translate(-7px, -7px);
    }
    100% {
      transform: rotate(0deg) translate(0, 0);
    }
  }
`;