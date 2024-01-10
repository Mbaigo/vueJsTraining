import availableParts from '../data/parts';
import { getNextValidIndex, getPreviousValidIndex } from './RobotBuilder.vue';

export default (await import('vue')).defineComponent({
name: 'RobotBuilder',
data() {
return {
availableParts,
selectedHeadIndex: 0,
selectedBaseIndex: 0,
selectedTorsoIndex: 0,
selectedLeftArmIndex: 0,
selectedRightArmIndex: 0,
};
},
methods: {
selectNextHead() {
this.selectHeadIndex = getNextValidIndex(this.selectHeadIndex, availableParts.heads.length);
},
selectPreviousHead() {
this.selectHeadIndex = getPreviousValidIndex(
this.selectHeadIndex,
availableParts.heads.length
);
},
selectNextBase() {
this.selectedBaseIndex = getNextValidIndex(this.selectedBaseIndex,
availableParts.bases.length
);
},
selectPreviousBase() {
this.selectedBaseIndex =
getPreviousValidIndex(this.selectBaseIndex, availableParts.bases.length);
},
},
});
