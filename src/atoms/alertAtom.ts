import { atom } from 'jotai';
import _ from 'lodash';
import { IAlert } from '../components/common/alert/alert.component';

export const alertAtom = atom<IAlert[] | []>([]);
export const addAlert = atom(null, (_get, set, update: IAlert) => {
    set(alertAtom, alertList => [update, ...alertList]);
    _.delay(() => {
        set(alertAtom, alertList =>
            alertList.filter((_item, index) => index !== 0),
        );
    }, 1000);
});
