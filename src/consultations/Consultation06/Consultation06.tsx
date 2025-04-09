import { useEffect, useState } from "react";
import {
  Consultation06Container,
  UserCard,
  Avatar,
  UserName,
  UserInfo,
} from "./styles";
import axios from "axios";
import Button from "../../components/Button/Button";

function Consultation06() {
  const USER_URL: string = "https://randomuser.me/api/";

  const [userData, setUserData] = useState<any>(undefined);
  const [isTimerOn, setIsTimerOn] = useState<boolean>(false);
  console.log(userData);

  let intervalID: any;
  const getUser = async () => {
    // 1 способ через стрелочную функцию
    // setIsTimerOn((prevValue) => !prevValue);

    // 2 способ через if else
    console.log(isTimerOn);
    if (isTimerOn) {
      setIsTimerOn(false);
      clearInterval(intervalID);
    } else {
      setIsTimerOn(true);
    }
 
    intervalID = setInterval(async () => {
      try {
        const response = await axios.get(USER_URL);
        setUserData(response.data.results[0]);
      } catch (error: any) {
      } finally {
      }
    }, 2000)
      
    // try {
    //   const response = await axios.get(USER_URL);
    //   setUserData(response.data.results[0]);
    // } catch (error: any) {

    // } finally {

    // }
  };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <Consultation06Container>
      <UserCard>
        {userData && (
          <>
            <Avatar src={userData?.picture?.large} alt="user avatar" />
            <UserName>
              Name:
              {`${userData?.name?.title} ${userData?.name?.first} ${userData?.name?.last}`}
            </UserName>
            <UserInfo>Phone:{userData.phone}</UserInfo>
            <UserInfo>Email:{userData.email}</UserInfo>
          </>
        )}
        <Button
          name={isTimerOn ? "CANCEL GET RANDOM USER" : "GET RANDOM USER"}
          onClick={getUser}
          danger={isTimerOn}
        />
      </UserCard>
    </Consultation06Container>
  );
}

export default Consultation06;