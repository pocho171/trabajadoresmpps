function calculateVacationDays() {
              const yearsOfService = parseInt(document.getElementById('years-of-service').value);
              const employeeType = document.getElementById('employee-type').value;
              let vacationDays = 0;

              // Lógica específica para cada tipo de personal
              switch (employeeType) {
                  case 'empleado':
                      if (yearsOfService >= 1 && yearsOfService <= 4) {
                          vacationDays = 18;
                      } else if (yearsOfService === 5) {
                          vacationDays = 19;
                      } else if (yearsOfService >= 6 && yearsOfService <= 7) {
                          vacationDays = 21;
                      } else if (yearsOfService === 8) {
                          vacationDays = 22;
                      } else if (yearsOfService === 9) {
                          vacationDays = 23;
                      } else if (yearsOfService === 10) {
                          vacationDays = 24;
                      } else if (yearsOfService === 11) {
                          vacationDays = 25;
                      } else if (yearsOfService === 12) {
                          vacationDays = 26;
                      } else if (yearsOfService === 13) {
                          vacationDays = 27;
                      } else if (yearsOfService === 14) {
                          vacationDays = 28;
                      } else if (yearsOfService === 15) {
                          vacationDays = 29;
                      } else {
                          vacationDays = 30;
                      }
                      break;
                  case 'obrero':
                      // Lógica para personal obrero (ajusta según corresponda)
  if (yearsOfService >= 1 && yearsOfService <= 5) {
              vacationDays = 20;
          } else if (yearsOfService === 5) {
              vacationDays = 19; // 5 años de servicio
          } else if (yearsOfService === 6 || yearsOfService === 7 || yearsOfService === 8) {
              vacationDays = 22; // 6,7,8 años de servicio
          } else if (yearsOfService === 8) {
              vacationDays = 22; // 8 años de servicio
          } else if (yearsOfService === 9) {
              vacationDays = 23; // 9 años de servicio
          } else if (yearsOfService === 10) {
              vacationDays = 24; // 10 años de servicio
          } else if (yearsOfService === 11) {
              vacationDays = 25; // 11 años de servicio
          } else if (yearsOfService === 12) {
              vacationDays = 26; // 12 años de servicio
          } else if (yearsOfService === 13) {
              vacationDays = 27; // 13 años de servicio
          } else if (yearsOfService === 14) {
              vacationDays = 28; // 14 años de servicio
          } else if (yearsOfService === 15) {
              vacationDays = 29; // 15 años de servicio
          } else {
              vacationDays = 30; // Para 3 años o más
          }
                      // ...
                      break;
                  case 'contratado':
                      // Lógica para personal contratado (ajusta según corresponda)
  if (yearsOfService >= 1 && yearsOfService <= 1) {
              vacationDays = 15;
          } else if (yearsOfService === 2) {
              vacationDays = 16; // 2 año de servicio
          } else if (yearsOfService === 3) {
              vacationDays = 17; // 3 años de servicio
          } else if (yearsOfService === 4) {
              vacationDays = 18; // 4 años de servicio
          } else if (yearsOfService === 5) {
              vacationDays = 19; // 5 años de servicio
          } else if (yearsOfService === 6) {
              vacationDays = 20; // 6 años de servicio
          } else if (yearsOfService === 7) {
              vacationDays = 21; // 7 años de servicio
          } else if (yearsOfService === 8) {
              vacationDays = 22; // 8 años de servicio
          } else if (yearsOfService === 9) {
              vacationDays = 23; // 9 años de servicio
          } else if (yearsOfService === 10) {
              vacationDays = 24; // 10 años de servicio
          } else if (yearsOfService === 11) {
              vacationDays = 25; // 11 años de servicio
          } else if (yearsOfService === 12) {
              vacationDays = 26; // 12 años de servicio
          } else if (yearsOfService === 13) {
              vacationDays = 27; // 13 años de servicio
          } else if (yearsOfService === 14) {
              vacationDays = 28; // 14 años de servicio
          } else if (yearsOfService === 15) {
              vacationDays = 29; // 15 años de servicio
          } else {
              vacationDays = 30; // Para 16 años o más
          }
                      // ...
                      break;
                  default:
                      break;
              }

              // Actualiza el mensaje de resultado
              document.getElementById('result').textContent = `Días de disfrute de vacaciones (${employeeType}): ${vacationDays} días hábiles`;
          }