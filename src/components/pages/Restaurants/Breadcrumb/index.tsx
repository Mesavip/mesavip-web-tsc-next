import { useContext } from 'react';
import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { BreadcrumbItem } from './BreadcrumbItem';

export function Breadcrumb() {
  const { name, address } = useContext(RestaurantContext);

  return (
    <ChakraBreadcrumb
      color='gray.500'
      fontSize='sm'
      alignContent='center'
      separator={<FaChevronRight size='10px' />}
    >
      <BreadcrumbItem text='Restaurants' href='/' />
      <BreadcrumbItem text={address.cidade} href='/' />
      <BreadcrumbItem text={address.bairro} href='/' />
      <BreadcrumbItem text={name} isCurrentPage />
    </ChakraBreadcrumb>
  );
}
