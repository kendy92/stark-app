import { Client } from './client';
    //* create a mock data return from server
export const CLIENTLIST: Client[] = [
    {   
        id: 1,
        firstName: 'Aqs',
        lastName: 'Malhotra',
        dob: new Date('01/05/1993'),
        sellerType: 'Private',
        contactEmail: 'aqs.malhotra@gmail.com',
        contactPhone: '289.456.3746',
        clientAddress: '111 - spiderman street, ON, M8B 3M0',
        isActiveMember: true,
    },
    {   
        id: 2,
        firstName: 'Lee',
        lastName: 'Dinh',
        dob: new Date('02/09/1992'),
        sellerType: 'Private',
        contactEmail: 'dinhconganh@gmail.com',
        contactPhone: '416.294.3786',
        clientAddress: '123 - marvel street, ON, M8W 3M3',
        isActiveMember: true,
    },
    {   
        id: 3,
        firstName: 'Hana',
        lastName: 'Harrington',
        dob: new Date('08/06/1987'),
        sellerType: 'Dealer',
        contactEmail: 'hana.harrington@gmail.com',
        contactPhone: '289.465.3678',
        clientAddress: '999 - happy street, ON, M8G 3M5',
        isActiveMember: false,
    },
    {   
        id: 4,
        firstName: 'Sviatoslav',
        lastName: 'Tokariev',
        dob: new Date('05/09/1985'),
        sellerType: 'Private',
        contactEmail: 'sviatoslav.tokariev@gmail.com',
        contactPhone: '416.293.4678',
        clientAddress: '456 - king street, ON, M8V 3M2',
        isActiveMember: true,
    }
];