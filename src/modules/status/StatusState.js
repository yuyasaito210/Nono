/**
  * Show Error
  */
export function statusMessage(dispatch, type, val, msg) {
  return new Promise((resolve, reject) => {
    // Validate types
    const allowed = ['error', 'success', 'info', 'loading'];
    if (!allowed.includes(type)) {
      return reject('Type should be one of success, error or info');
    }

    // Set some defaults for convenience
    let message = val;
    if (!val) {
      if (type === 'success') message = msg ? msg : 'Success';
      if (type === 'error') message = msg ? msg : 'Sorry, an error occurred';
      if (type === 'info') message = msg ? msg : 'Something is happening...';
      if (type === 'loading' && val !== false) message = true;
    }

    return resolve(dispatch({
      type: 'STATUS_REPLACE',
      [type]: message,
    }));
  });
}

export const initialState = {
  loading: false,
  info: null,
  error: null,
  success: null,
};

export default function statusReducer(state = initialState, action) {
  switch (action.type) {
    case 'STATUS_REPLACE': {
      return {
        ...state,
        loading: action.loading || false,
        info: action.info || null,
        error: action.error || null,
        success: action.success || null,
      };
    }
    default:
      return state;
  }
}
