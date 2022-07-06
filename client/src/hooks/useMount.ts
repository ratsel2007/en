import {useEffect} from 'react';

type cb = () => void;
export const useMount = (cb: cb) => {
    return useEffect(() => cb(), []);
};
