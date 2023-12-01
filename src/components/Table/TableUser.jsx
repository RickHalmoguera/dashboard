import { TableStyled, TableUserBtn, TdBtnStyled, TdFlex, TdHeadind, TdIdText, TdStyled, TdSubText, TdText, TdUserCardStyled, TrHeadStyled, TrStyled } from './TableStyled';
import { DotsStyledIcon, PhoneStyledIcon } from '../../components/Icons/IconsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersData, getUsersError, getUsersStatus } from '../../features/users/usersSlice';
import { useEffect, useState } from 'react';
import { getUsersListFromAPIThunk } from '../../features/users/usersThunk';
import { useNavigate } from 'react-router-dom';


export const TableUser = ({FilterOption, selectedSortOption, SearchName}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const usersListData = useSelector(getUsersData)
  const usersListError = useSelector(getUsersError)
  const usersListStatus = useSelector(getUsersStatus)
  const [spinner, setSpinner] = useState(true)
  const [filteredUsersList, setFilteredUsersList] = useState([])
  
  
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = filteredUsersList.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredUsersList.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(()=>{
    let newFilteredUsersList=[]
    if (usersListStatus === "idle") {
      dispatch(getUsersListFromAPIThunk());
    } else if (usersListStatus === "pending") {
      setSpinner(true);
    } else if (usersListStatus === "fulfilled") {

      if(FilterOption ==="active"){
        newFilteredUsersList = usersListData.filter((user) => user.is_active === true )
      }else if(FilterOption ==="inactive"){
        newFilteredUsersList = usersListData.filter((user) => user.is_active === false )
      }else{
        newFilteredUsersList = [...usersListData]
      }
     
      if (SearchName) {
        const searchNameLowerCase = SearchName.toLowerCase();
        newFilteredUsersList = newFilteredUsersList.filter((user) => user.name.toLowerCase().includes(searchNameLowerCase));
      }
      
      if (selectedSortOption === "newest") {
        newFilteredUsersList.sort((a, b) => new Date(b.date) - new Date(a.date));
      }else if (selectedSortOption === "abc") {
        newFilteredUsersList.sort((a, b) => a.name.localeCompare(b.name))
      }

      setFilteredUsersList(newFilteredUsersList)
      setSpinner(false)
      setCurrentPage(1)
    }

  },[dispatch, usersListData, usersListStatus, FilterOption,selectedSortOption, SearchName])

  return (
    <>
      <TableStyled>
        <thead>
          <tr>
            <TrHeadStyled>Employee</TrHeadStyled>
            <TrHeadStyled>Job Description</TrHeadStyled>
            <TrHeadStyled>Contact</TrHeadStyled>
            <TrHeadStyled>Status</TrHeadStyled>
            <TrHeadStyled>Action</TrHeadStyled>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map((user) => (
            <TrStyled key={user.id}>
              <TdUserCardStyled>
                <img src={user.photo} alt="" />
                <div>
                    <TdHeadind>{user.name}</TdHeadind>
                    <TdIdText># {user.id}</TdIdText>
                    <TdSubText>{user.start_date}</TdSubText>
                </div>
              </TdUserCardStyled>
              <td>
                <TdText>{user.description}</TdText>
              </td>
              <td>
                <TdFlex>
                  <PhoneStyledIcon/>
                  <TdText>{user.phone}</TdText>
                </TdFlex>
              </td>

              <TdBtnStyled>
                  {!user.is_active && <TableUserBtn $bg="transparent" $color="#E23428">INACTIVE</TableUserBtn>}
                  {user.is_active  && <TableUserBtn $bg="transparent" $color="#5AD07A">ACTIVE</TableUserBtn>}
              </TdBtnStyled>
              <td>
              <DotsStyledIcon />
              </td>
            </TrStyled>
          ))}
        </tbody>
      </TableStyled>

      <div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    
    </>
    
  )



}
