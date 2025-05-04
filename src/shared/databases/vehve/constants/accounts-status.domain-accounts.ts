const ACCOUNT_STATUS = {
  ACTIVE: 1,
  INACTIVE: 2,
  SUSPENDED: 3,
  PENDING: 4,
};

const ACCOUNT_STATUS_LIST = [];

ACCOUNT_STATUS_LIST.push({
  id: ACCOUNT_STATUS.ACTIVE,
  name: 'Active',
  tr_name_slug: 'active',
});

ACCOUNT_STATUS_LIST.push({
  id: ACCOUNT_STATUS.INACTIVE,
  name: 'Inactive',
  tr_name_slug: 'inactive',
});

ACCOUNT_STATUS_LIST.push({
  id: ACCOUNT_STATUS.SUSPENDED,
  name: 'Suspended',
  tr_name_slug: 'suspended',
});

ACCOUNT_STATUS_LIST.push({
  id: ACCOUNT_STATUS.PENDING,
  name: 'Pending',
  tr_name_slug: 'pending',
});

export { ACCOUNT_STATUS, ACCOUNT_STATUS_LIST };
