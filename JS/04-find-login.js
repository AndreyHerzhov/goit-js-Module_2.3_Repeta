const logins = [`m4ngoDodg`, `k1widab3st`,`aj4xth3m4n`, `poly1scute`, ];
const loginTofind = `poly1scute`;
// let message = `Пользоваетель ${loginTofind}  найден`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log(login)
//     if (login === loginTofind) {
//         message = `Пользоваетель ${loginTofind}  найден`;
//         break;
//     }
    
    
// }

// for (const login of logins) {
//     console.log(`Login:`, login);
//     console.log(`${login} === ${loginTofind}:`, login === loginTofind);

//     if (login === loginTofind) {
//         message = `Пользоваетель ${loginTofind}  найден`;
//         break;
//     }
// }

// if (logins.includes(loginTofind)) {
//     console.log(message);
// }
// console.log(logins.includes(loginTofind))


// const a = 15 > 10 ? `aga` : `no`;
// console.log(a)

const message = logins.includes(loginTofind)
    ? `Пользователь ${loginTofind} найден`
    : `Пользователь ${loginTofind} не найден`;

console.log(message);
