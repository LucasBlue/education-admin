import { useCallback, useState } from 'react';
type UseCountDownReturnType = [
	countDown: number,
	handleCountDown: () => void,
	sendBtnState: boolean
];

function useCountDown(): UseCountDownReturnType {
	const [countDown, setCountDown] = useState<number>(60);
	const [sendBtnState, setSendBtnState] = useState<boolean>(false);

	const handleCountDown: () => void = useCallback(() => {
		setSendBtnState((prevState) => !prevState);
		const timer = setInterval(() => {
			setCountDown((prevState) => prevState - 1);
		}, 1000);
		setTimeout(() => {
			clearInterval(timer);
			setCountDown(60);
			setSendBtnState((prevState) => !prevState);
		}, 60000);
	}, []);
	return [countDown, handleCountDown, sendBtnState];
}

export default useCountDown;
