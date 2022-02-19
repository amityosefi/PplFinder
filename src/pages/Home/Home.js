import { useState } from "react";
import Text from "components/Text";
import AddUser from "components/AddUser";
import UserList from "components/UserList";
import { usePeopleFetch, useLocalStorage, LocalStorageKeys } from "hooks";
import * as S from "./style";

const Home = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const { users, setUsers, isLoading, hasMore, countries, setCountries, genders, setGenders} = usePeopleFetch(pageNumber);  
  const [favoriteUsersList, setFavoriteUsersList] = useLocalStorage(LocalStorageKeys.FAVORITE_USERS, []);

  const addUser = (user) => {
    const defaultParametersForUser = { "gender": "male", "name": { "title": `${user.title}`, "first": `${user.firstName}`, "last": `${user.lastName}` }, "location": { "street": { "number": `${user.streetNumber}`, "name": `${user.streetName}` }, "city": `${user.city}`, "state": "Ontario", "country": `${user.country}`, "postcode": "Y1F 1P1", "coordinates": { "latitude": "-65.5665", "longitude": "-90.1588" }, "timezone": { "offset": "-9:00", "description": "Alaska" } }, "email": `${user.email}`, "login": { "uuid": "872f87a0-7284-4f09-9274-0f1a50cc645b", "username": "heavyfish153", "password": "burly", "salt": "EkHr7dLg", "md5": "a30ca057f9a3839f2a8258092a9a20f4", "sha1": "6f87206d24d9d93c9d0420035d130e8f4c258529", "sha256": "062734adc4b6876cab715a3afc48c961c1169b944a3be305cfb14b1d20753ef8" }, "dob": { "date": "1996-09-01T13:05:24.805Z", "age": 26 }, "registered": { "date": "2003-07-06T13:07:02.010Z", "age": 19 }, "phone": "307-832-3767", "cell": "146-969-0035", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/men/66.jpg", "medium": "https://randomuser.me/api/portraits/med/men/66.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg" }, "nat": "CA" }
    setUsers([defaultParametersForUser, ...users])
  }

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <AddUser addUser={addUser}></AddUser>
        <UserList users={users} isLoading={isLoading} setPageNumber={setPageNumber} favoriteUsersList={favoriteUsersList} 
        setFavoriteUsersList={setFavoriteUsersList} countries={countries} setCountries={setCountries} hasMore={hasMore} 
        genders={genders} setGenders={setGenders} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
