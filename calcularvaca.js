function calculateVacationDays() {
              const yearsOfService = parseInt(document.getElementById('years-of-service').value);
              const employeeType = document.getElementById('employee-type').value;
              let vacationDays = 0;

              // L�gica espec�fica para cada tipo de personal
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
                      // L�gica para personal obrero (ajusta seg�n corresponda)
  if (yearsOfService >= 1 && yearsOfService <= 5) {
              vacationDays = 20;
          } else if (yearsOfService === 5) {
              vacationDays = 19; // 5 a�os de servicio
          } else if (yearsOfService === 6 || yearsOfService === 7 || yearsOfService === 8) {
              vacationDays = 22; // 6,7,8 a�os de servicio
          } else if (yearsOfService === 8) {
              vacationDays = 22; // 8 a�os de servicio
          } else if (yearsOfService === 9) {
              vacationDays = 23; // 9 a�os de servicio
          } else if (yearsOfService === 10) {
              vacationDays = 24; // 10 a�os de servicio
          } else if (yearsOfService === 11) {
              vacationDays = 25; // 11 a�os de servicio
          } else if (yearsOfService === 12) {
              vacationDays = 26; // 12 a�os de servicio
          } else if (yearsOfService === 13) {
              vacationDays = 27; // 13 a�os de servicio
          } else if (yearsOfService === 14) {
              vacationDays = 28; // 14 a�os de servicio
          } else if (yearsOfService === 15) {
              vacationDays = 29; // 15 a�os de servicio
          } else {
              vacationDays = 30; // Para 3 a�os o m�s
          }
                      // ...
                      break;
                  case 'contratado':
                      // L�gica para personal contratado (ajusta seg�n corresponda)
  if (yearsOfService >= 1 && yearsOfService <= 1) {
              vacationDays = 15;
          } else if (yearsOfService === 2) {
              vacationDays = 16; // 2 a�o de servicio
          } else if (yearsOfService === 3) {
              vacationDays = 17; // 3 a�os de servicio
          } else if (yearsOfService === 4) {
              vacationDays = 18; // 4 a�os de servicio
          } else if (yearsOfService === 5) {
              vacationDays = 19; // 5 a�os de servicio
          } else if (yearsOfService === 6) {
              vacationDays = 20; // 6 a�os de servicio
          } else if (yearsOfService === 7) {
              vacationDays = 21; // 7 a�os de servicio
          } else if (yearsOfService === 8) {
              vacationDays = 22; // 8 a�os de servicio
          } else if (yearsOfService === 9) {
              vacationDays = 23; // 9 a�os de servicio
          } else if (yearsOfService === 10) {
              vacationDays = 24; // 10 a�os de servicio
          } else if (yearsOfService === 11) {
              vacationDays = 25; // 11 a�os de servicio
          } else if (yearsOfService === 12) {
              vacationDays = 26; // 12 a�os de servicio
          } else if (yearsOfService === 13) {
              vacationDays = 27; // 13 a�os de servicio
          } else if (yearsOfService === 14) {
              vacationDays = 28; // 14 a�os de servicio
          } else if (yearsOfService === 15) {
              vacationDays = 29; // 15 a�os de servicio
          } else {
              vacationDays = 30; // Para 16 a�os o m�s
          }
                      // ...
                      break;
                  default:
                      break;
              }

              // Actualiza el mensaje de resultado
              document.getElementById('result').textContent = `D�as de disfrute de vacaciones (${employeeType}): ${vacationDays} d�as h�biles`;
          }