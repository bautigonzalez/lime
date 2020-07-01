import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"

export default ({ users, setAdmin }) => (

  <div>
          <h3>Usuarios</h3>
            <ul>{!users && "No hay usuarios para mostrar"}
                {users && users.map(user=>(
                  <li>
                      <div>{user.username} {user.state != 2 ? (user.state == 0 ? (
                        <Button onClick={()=>setAdmin(user.id, 1)}>Hacer Admin</Button>
                        ):(
                        <Button onClick={()=>setAdmin(user.id, 0)}>Quitar Admin</Button>)) : ("")}
                     </div>
                  </li>
                ))}
            </ul>
      </div>

);