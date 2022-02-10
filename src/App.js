import React, {useEffect, useState} from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  min-height: 100vh;
  background: lightgray;
  padding: 20px;
  button{
    background: #7e3a7b;
    color: white;
    border: none;
    text-align: center;
    border-radius: 5px;
    min-width: 80px;
    min-height: 40px;
    cursor: pointer;
  }
  .btn-div{
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    padding-right: 20px;
  }
  .btn-add{
    padding: 10px 20px;
    font-size: 16px;
    line-height: 20px;
  }
  .btn-select{
    padding: 10px 20px;
    font-size: 16px;
    line-height: 20px;
    margin-right: 20px;
  }
  .user-head{
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 30px;
    color: #4a5568;
    font-weight: bold;
  }
  .user-btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 30px;
    color: #4a5568;
    font-weight: bold;
  }
  .dell-space{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body-set{
    padding: 20px 30px;

    background-color: white;
    margin: 20px;
    border-radius: 10px;
  }
  p{
  }
  .name-set{

  }
  .value-set{

  }
  modal{
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    overflow: auto;
    padding-top: 10%;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4);
  }
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: none;
    width: 50%;
    border-radius: 10px;
  }
  .set-btn{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .input-title{
    width: 15%;

  }
  .input-set{
    border: none;
    border: 1px solid gray;
    padding: 10px;
    margin-top: 10px;
    border-radius: 6px;
    border-color: #e5e7eb;
  }
  .btn-class{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .btn-checked{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: #7e3a7b;
  }
  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: white;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: #7e3a7b;
    width: 1.15em;
    height: 1.15em;
    border: 0.1em solid #7e3a7b;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  .dell-btn{
    margin-left: 20px;
    border: none;
    background-color: white;
    color: #282c34;
    font-size: 16px;
  }
  .edit-btn{
    border: none;
    background-color: white;
    color: #282c34;
    font-size: 16px;
  }
  .title{
    display: flex;
    justify-content: space-between;

  }
  .title-set{
    width: 23%;
    color: #6b7280;
    font-size: 16px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
  }
  .address-set{
    width: 33%;
    color: #6b7280;
    font-size: 16px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
  }
  .text-center{
    text-align: center;
  }
  .border-left{
    border-left: 1px solid #e5e7eb;
  }
  .value-set{
    color: #374151;
    margin-top: 10px;
    font-size: 24px;
  }
  .dell-icon{
    padding-right: 10px;
  }
  .input-line{
    display: flex;
    flex-direction: column;
  }
  .row-set{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .row-inner{
    width: 45%;
  }
  .close-set{
    margin-right: 20px;
    border: 1px solid #7e3a7b;
    background-color: white;
    color: #7e3a7b;
  }
  .search-set{
    border: none;
    margin-right: 20px;
    background-color: white;
    border-radius: 25px;
    padding : 10px 20px;
    :focus{
      outline: none !important;
    }
  }
`;
const App = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address,setAddress] = useState('');
    const [contact,setContact] = useState('');
    const [open,setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState(false);
    const [isChecked, setIsChecked] = useState(false);



    const bioData = [
        {id: 1, name: 'Elvis', age: 27, contact: 12345678, address: 'House #3'},
        {id: 2, name: 'Quin', age: 25, contact: 12233243438, address: 'Street #5'},
        {id: 3, name: 'Liu', age: 29, contact: 20192721, address: 'Wuchang liu hao #5'}
    ];


    const [users, setUsers] = useState(bioData);
    const removeElem = (idx) => {
        users.splice(idx, 1)
        setUsers([...users]);
    }
    const handleDelete = (idx) => {

    }
    const handleSave = () => {
        const user = {
            name: name,
            age: age,
            contact: contact,
            address: address
        };
        users.splice(0, 0, user);
        setUsers([...users]);
        setName('');
        setAge('');
        setContact('');
        setAddress('');
    }
    const handleEditSave = () => {
        const user = {
            name: name,
            age: age,
            contact: contact,
            address: address
        };
        users[selectedIndex] = user;
        setUsers([...users]);
        setIsEdit(false);
        setOpen(false);
        setName('');
        setAge('');
        setContact('');
        setAddress('');
    }
    const handleEdit = (index) => {
        setOpen(true);
        setSelectedIndex(index);
        setIsEdit(true);
        setName(users[index].name);
        setAge(users[index].age);
        setContact(users[index].contact);
        setAddress(users[index].address);
    }
    const onSubmits = (e) => {
        e.preventDefault();
        setOpen(false);
        setName('');
        setAge('');
        setContact('');
        setAddress('');
    }
    const handleSelect = () => {
        setSelected(!selected);
    }
    useEffect(() => {
        setUsers(bioData);
    }, [])
    const handleCheck = (e) => {
        const {name, checked} = e.target;
        if (name === "allSelect"){
            let tempUser = users.map(user => {return {...user, isChecked: checked}});
            setUsers(tempUser);
        } else {
            let tempUser = users.map(user => user.name === name ? {...user, isChecked : checked} : user);
            setUsers(tempUser);
        }
    };
    return (
        <MainContainer>
            <div>
                <div className='btn-div'>
                    <input className='search-set' type='text' value={search} placeholder='Search...'  onChange={(e) => setSearch(e.target.value)}/>

                    <button className='btn-add' onClick={() => setOpen(true)}>Add new user</button>
                </div>
                <div className='user-head'>
                    Recommended users
                </div>
                <div className='user-btn'>
                   <span>
                        {
                            selected &&
                            <input type='checkbox' style={{fontSize:16}} name="allSelect" checked={users.filter((user) => user?.isChecked !== true).length < 1}  onChange={handleCheck} />
                        }
                   </span>
                       <span>
                            {
                                selected &&
                                <button className='btn-select' onClick={handleDelete}>Delete</button>
                            }
                           <sapn>
                            <button className='btn-select' onClick={handleSelect}> Select</button>
                        </sapn>
                       </span>
                </div>
                {
                    users.filter((user) => {
                        if (search === "") {
                            return user
                        } else if (user.name.toLowerCase().includes(search.toLowerCase())){
                            return user
                        }
                    }).map( (user, idx) =>
                        <div key={idx} className='body-set'>
                            {
                                !selected ?
                                    <p className='btn-class'>
                                        <button className='edit-btn' onClick={() => handleEdit(idx)}>
                                            <span className='dell-icon'><img src='/edit.svg' alt='' width='15' height='15'/></span>
                                            Edit
                                        </button>
                                        <button className='dell-btn' onClick={()=> removeElem(idx)}>
                                            <span className='dell-icon'><img src='/delete.svg' alt='' width='15' height='15'/></span>
                                            Delete
                                        </button>
                                    </p>
                                    :
                                    <p className='btn-checked'>
                                        <span>
                                            <input type='checkbox' name={user.name} checked={user?.isChecked || false} onChange={handleCheck}/>
                                        </span>
                                        <span>
                                            <button className='edit-btn' onClick={() => handleEdit(idx)}>
                                                <span className='dell-icon'><img src='/edit.svg' alt='' width='15' height='15'/></span>
                                                Edit
                                            </button>
                                            <button className='dell-btn' onClick={()=> removeElem(idx)}>
                                                <span className='dell-icon'><img src='/delete.svg' alt='' width='15' height='15'/></span>
                                                Delete
                                            </button>
                                        </span>
                                    </p>
                            }
                            <p className='title'>
                         <span className='title-set'>
                             <span>
                                 Name
                             </span>
                             <span className='value-set'>
                                 {user.name}
                             </span>
                         </span>
                                <span className='title-set text-center border-left'>
                              <span>
                                 Age
                             </span>
                             <span className='value-set'>
                                 {user.age}
                             </span>
                         </span>
                                <span className='title-set text-center border-left'>
                              <span>
                                 Contact
                             </span>
                             <span className='value-set'>
                                 {user.contact}
                             </span>
                         </span>
                                <span className='address-set text-center border-left'>
                             <span>
                                 Address
                             </span>
                             <span className='value-set'>
                                 {user.address}
                             </span>
                         </span>
                            </p>

                        </div>
                    )
                }
            </div>
            {
                open &&
                <modal>
                    <form onSubmit={onSubmits}>
                        <div className='modal-content'>
                            <div className='row-set'>
                                <div className='row-inner'>
                                    <p className='input-line'>
                                        <span className='input-title'>
                                            Name
                                        </span>
                                        <input className='input-set' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Please type your name...'/>
                                    </p>
                                    <p className='input-line'>
                                        <span className='input-title'>
                                            Age
                                        </span>
                                        <input className='input-set' type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Please type your age...'/>
                                    </p>
                                </div>
                                <div className='row-inner'>
                                    <p className='input-line'>
                                        <span className='input-title'>
                                            Contact
                                        </span>
                                        <input className='input-set' type='text' value={contact} onChange={(e) => setContact(e.target.value)} placeholder='Please type your contact...'/>
                                    </p>
                                    <p className='input-line'>
                                        <span className='input-title'>
                                            Address
                                        </span>
                                        <input className='input-set' type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Please type your address...'/>
                                    </p>
                                </div>
                            </div>
                            <div className='set-btn'>
                                <span>
                                    <button className='close-set' onClick={() => setOpen(false)}>
                                        Close
                                    </button>
                                    <button type='submit'onClick={() => {
                                        if (isEdit) {
                                        handleEditSave();
                                        } else {
                                        handleSave();
                                        }
                                        }}>
                                        Save
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </modal>
            }
        </MainContainer>
    );
}

export default App;
