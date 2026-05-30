import { Integral } from './interface/Integral.js'

import trapezoid from './integral/trapezoid.js'
import simpson from './integral/simpson.js'
import gaussKronrod from './integral/gaussKronrod.js'

import minusInfToInf from './integral/DE/minusInfToInf.js'
import zeroToInf from './integral/DE/zeroToInf.js'
import minusOneToOne from './integral/DE/minusOneToOne.js'

const integral: Integral = { trapezoid, simpson, gaussKronrod, minusInfToInf, zeroToInf, minusOneToOne };
export default integral;
