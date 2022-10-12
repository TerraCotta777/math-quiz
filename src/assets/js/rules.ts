import { User } from './types';
import "../scss/main.scss";
import { rulesButton, rulesInfo } from './tag-variables';

export const currentUser: User = JSON.parse(localStorage.getItem("currentUser")!);

rulesButton.focus();
if (currentUser.gameMode === 'time-attack') {
	rulesInfo.innerHTML = `<h3 class="rules__subtitle">Time Attack mode</h3>
	<p class="rules__rule">
		You will be given only 90 seconds after start. Do your best.
	</p>`
}