import { INCREMENT, DECREMENT, RESET } from '../reducers/Counter';

export function incrementNumber() {
    return { type: INCREMENT };
}

export function decrementNumber() {
    return { type: DECREMENT };
}

export function resetNumber() {
    return { type: RESET };
}