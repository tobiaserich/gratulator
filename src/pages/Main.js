import styled from "@emotion/styled";
import React from "react";
import MonthlyBirthdayList from "../components/MonthlyBirthdayList";
import NextBirthday from "../components/NextBirthday";
import getNextBirthday from "../helper/getNextBirthday";
import sortBirthdays from "../helper/sortBirthdays";
import MainMenu from "../components/MainMenu";
import AddPersonForm from "../components/AddPersonForm";

const Header = styled("div")`
  display: flex;
  width: 100%;
  background-color: #413a50;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: ${({ isSticky }) => (isSticky === true ? "sticky" : "relative")};
  top: 0;
  z-index: 60;
  color: #e6e6e6;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 38px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 70%);
  animation: ${({ animate }) => animate} 0.2s ease-out;
  transform-origin: top;
  @keyframes moveIn {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
  @keyframes moveOut {
    0% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0);
    }
  }
`;

const Container = styled("div")`
  ${({ isFormActive }) => (isFormActive ? "height:100vh;overflow:hidden;" : "")}
`;

const birthdayList = [
  {
    name: "Tobias Erich",
    birthday: "1989/12/24",
  },
  {
    name: "Alton Ritter",
    birthday: "1990/01/20",
  },
  {
    name: "Billie Fields",
    birthday: "1985/10/22",
  },
  {
    name: "Stuart Fletcher",
    birthday: "1987/06/15",
  },
  {
    name: "Amy Sanders",
    birthday: "1963/06/15",
  },
  {
    name: "Simon Aurelius Friderichson Halfting",
    birthday: "1939/06/15",
  },
  {
    name: "Max Him",
    birthday: "1999/06/15",
  },

  {
    name: "Waverly Hutchinson",
    birthday: "2003/12/20",
  },
  {
    name: "DeForest Sutton",
    birthday: "1985/10/01",
  },
  {
    name: "Jim English",
    birthday: "1995/12/19",
  },
  {
    name: "Burley Lindsey",
    birthday: "2001/09/04",
  },
  {
    name: "Champ Pugh",
    birthday: "1991/07/22",
  },
];

const Main = () => {
  const [addPersonFormVisible, setAddPersonFormVisible] = React.useState(true);
  const [headerAnimation, setHeaderAnimation] = React.useState(null);
  const [touchPosition, setTouchPosition] = React.useState(null);
  const [isSticky, setIsSticky] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState();

  const sortedBirthdayList = sortBirthdays(birthdayList);
  const nextBirthday = getNextBirthday(sortedBirthdayList);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let birthdaysPerMonth = {};
  sortedBirthdayList.forEach((singlePerson) => {
    const monthName = months[new Date(singlePerson.birthday).getMonth()];
    birthdaysPerMonth[monthName]
      ? birthdaysPerMonth[monthName].push(singlePerson)
      : (birthdaysPerMonth[monthName] = new Array(singlePerson));
  });

  const IterateTroughMonths = () => {
    const collectMonths = [];
    let counter = 0;

    for (const key in birthdaysPerMonth) {
      counter++;
      collectMonths.push(
        <MonthlyBirthdayList
          ppl={birthdaysPerMonth[key]}
          dir={counter % 2 === 0 ? "right" : "left"}
          monthName={key}
        />
      );
    }
    return collectMonths;
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientY;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientY;
    const diff = touchDown - currentTouch;

    if (diff > 15) {
      setTimeout(() => setIsSticky(false), 200);

      setHeaderAnimation("moveOut");
    }
    if (diff < -25) {
      setIsSticky(true);
      setHeaderAnimation("moveIn");
    }
    setTouchPosition(currentTouch);
  };

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      setIsSticky(true);
      setHeaderAnimation("moveIn");
    }
    if (e.deltaY > 0) {
      setTimeout(() => setIsSticky(false), 200);
      setHeaderAnimation("moveOut");
    }
  };

  return (
    <Container
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onWheel={handleWheel}
      isFormActive={addPersonFormVisible}
    >
      {addPersonFormVisible ? (
        <AddPersonForm closeForm={() => setAddPersonFormVisible(false)} />
      ) : (
        ""
      )}
      <Header isSticky={isSticky} animate={headerAnimation}>
        Gratulator <MainMenu setFormVisible={setAddPersonFormVisible} />
      </Header>
      <NextBirthday birthdayList={nextBirthday} />
      {IterateTroughMonths()}
    </Container>
  );
};

export default Main;
