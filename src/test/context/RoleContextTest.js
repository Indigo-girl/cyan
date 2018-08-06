import RoleContext from '../../logic/context/RoleContext';
import AddCalculator from '../../logic/calculator/AddCalculator';
import ScaleCalculator from '../../logic/calculator/ScaleCalculator';

const role = new RoleContext();
role._setBaseProp(1, 100);

console.log(role.getRealProp(1));
role.addCalculator(new AddCalculator(1, 1, 20));
console.log(role.getRealProp(1));
role.addCalculator(new ScaleCalculator(1, 2, 1.3));
console.log(role.getRealProp(1));