const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';
const INITIAL_STATE = {
  categories: [],
  isChecking: false,
  message: '',
};

const checkStatus = () => ({
  type: CHECKED_STATUS,
});

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return {
        ...state,
        isChecking: true,
        message: 'Under construction',
      };
    default:
      return state;
  }
};

export { checkStatus };
export default categoryReducer;
