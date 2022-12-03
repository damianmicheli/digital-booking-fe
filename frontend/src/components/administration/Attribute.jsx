import React from 'react';
import styles from "./administration.module.css";

const Attribute = () => {
  return (
    <div className={styles.contentAttributes}>
                <div className={styles.groupForm}>
                  <label className="text2">Nombre e ícono</label>
                  <select
                    name="attribute"
                    onChange={(e) => {
                      setOptionAttribute({
                        selectedOption: e.target.value,
                      });
                    }}
                  >
                    <option selected="selected">Elegí un atributo</option>
                    {atributos &&
                      atributos.map((atributo) => (
                        <option key={atributo.id} value={atributo.id}>
                          {atributo.nombre}
                          <Icon css={styles.icon} icon={atributo.icono} />
                        </option>
                      ))}
                  </select>
                </div>
                <Icon
                  css={styles.addIcon}
                  icon={faSquarePlus}
                  event={handleAttribute}
                />
              </div>
  )
}

export default Attribute