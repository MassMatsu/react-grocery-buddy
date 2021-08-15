import React, { useEffect } from 'react';

const Alert = ({ alert, setUpAlert, list }) => {
  const { show, msg, type } = alert;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUpAlert();
    }, 1500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [list]);

  return <p className={show ? `msg ${type}` : 'msg'}>{msg}</p>;
};

export default Alert;
