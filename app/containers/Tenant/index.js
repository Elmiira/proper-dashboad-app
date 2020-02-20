import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import MaterialTable from 'material-table';
import { columns, options } from './constants';
import messages from './messages';
import {
  fetchTenant,
  addTenant,
  updateTenant,
  deleteTenant,
  validateAddress,
  getAddress,
} from 'api/tenantServices';

export default function Tenant() {
  useEffect(() => {
    getTenants(page, pageSize, query);
  }, []);

  const [state, setState] = useState({
    tenants: [],
    totalTenants: 0,
  });
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(options.pageSize);
  const [query, setQuery] = useState({});

  const getTenants = async (page, pageSize, query) => {
    try {
      const { tenants, totalTenants } = await fetchTenant({
        page,
        pageSize,
        query,
      });
      setState({ tenants, totalTenants });
    } catch (error) { }
  };

  const changePage = newPage => {
    // *** Backend Pagination ***
    // getTenants(newPage, pageSize, query);
    // setPage(newPage);
  };

  const changeRowPerPage = newPageSize => {
    // *** Backend Pagination ***
    // getTenants(page, newPageSize, query);
    // setPageSize(newPageSize);
  };

  const searchChange = query => {
    //TODO:
    // *** generate Query for complex DB search ***
    // getTenants(page, newPageSize, query);
    // setQuery(query);
  };

  //TODO: proper Msg with snackbar
  const validateTenant = async newTenant => {
    const { deposit, rent, moveInPrice, street, houseNumber } = newTenant;
    if (rent < 0 || deposit < 0 || moveInPrice < 0) {
      return false;
    }
    //TODO: date validation
    if (street === undefined || houseNumber === undefined) {
      return false; //TODO: required fields
    }
    return await isAddressValid(street, houseNumber);
  };

  const isAddressValid = async (street, houseNumber) => {
    const result = await validateAddress(street, houseNumber);
    if (result.length === 0) {
      return false;
    }
    const address = await getAddress(result[0].id);
    //TODO: generate a valid address data structure through the above response
    // and then send it to server and destruct server addresses into street and house number
    // fields for ui table
    return true;
  };

  return (
    <MaterialTable
      title={<FormattedMessage {...messages.TableTitle} />}
      columns={columns}
      data={state.tenants}
      paginationType={'stepped'}
      options={{
        selection: true,
        pageSize: options.pageSize,
        pageSizeOptions: options.pageSizeOptions,
      }}
      onChangeRowsPerPage={changeRowPerPage}
      onChangePage={changePage}
      onSearchChange={searchChange}
      editable={{
        onRowAdd: async newTenant => {
          const isTenantValid = await validateTenant(newTenant);
          if (isTenantValid){
            // mack to support db operations
            const id = state.totalTenants + 1;
            const isActive = true;
            const res = await addTenant({ ...newTenant, id, isActive });
            if (res) {
              setState(prevState => {
                const tenants = [...prevState.tenants];
                tenants.push({ ...newTenant, id });
                return { ...prevState, tenants };
              });
            } else {
              //TODO: use snackbar
              console.warn('Try again please!');
            }
          }
          //Otherwise user will be notified about the problem
        },
        onRowUpdate: async (newTenant, oldTenant) => {
          const { id } = oldTenant;
          //TODO: validate the new input
          const res = await updateTenant(id, newTenant);
          if (res) {
            setState(prevState => {
              const tenants = [...prevState.tenants];
              const updatedIndex = tenants.findIndex(
                tenant => tenant.id === id,
              );
              tenants[updatedIndex] = newTenant;
              return { ...prevState, tenants };
            });
          } else {
            //TODO: use snackbar
            console.warn('Try again please!');
          }
        },
        onRowDelete: async oldTenant => {
          const { id } = oldTenant;
          const res = await deleteTenant(id);
          if (res) {
            setState(prevState => {
              const tenants = [...prevState.tenants];
              const updatedIndex = tenants.findIndex(
                tenant => tenant.id === id,
              );
              tenants.splice(updatedIndex, 1);
              return { ...prevState, tenants };
            });
          } else {
            //TODO: use snackbar
            console.warn('Try again please!');
          }
        },
      }}
    />
  );
}
