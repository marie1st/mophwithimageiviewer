import styles from './List.module.css';
import {Router} from 'react-router-dom';
import { List } from './List/list';
import React, { useState, useEffect } from 'react';
import {ImAttachment} from 'react-icons';
import useModal from 'react-hook-usemodal';

export const Details = () =>{
  const id = '1';

  return (
   <div>
       {users.map((user, index) =>(
           
        <Cardbox key ={`${id}`}>

        </Cardbox>
     ))}
   </div>
  );
}