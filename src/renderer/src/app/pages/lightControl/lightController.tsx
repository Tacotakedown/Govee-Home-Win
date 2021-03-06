import { createSignal } from 'solid-js';
import { HexColorInput, HexColorPicker, RgbColorPicker } from 'solid-colorful';

const LightController = () => {
	const [color, setColor] = createSignal('#aabbcc');

	return (
		<>
			<HexColorPicker color={color()} onChange={setColor} />
			<HexColorInput color={color()} onChange={setColor} />
		</>
	);
};
export default LightController;
