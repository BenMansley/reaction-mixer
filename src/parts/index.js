import BaseNormal from './base-normal.png';
import BaseAngry from './base-angry.png';
import EyesHaha from './eyes-haha.png';
import EyesWow from './eyes-wow.png';
import EyesSadHigh from './eyes-sad-high.png';
import EyesSadLow from './eyes-sad-low.png';
import EyesAngryHigh from './eyes-angry-high.png';
import EyesAngryLow from './eyes-angry-low.png';
import MouthHaha from './mouth-haha.png';
import MouthWow from './mouth-wow.png';
import MouthSad from './mouth-sad.png';
import MouthAngry from './mouth-angry.png';
import TearHigh from './tear-high.png';
import TearLow from './tear-low.png';

export default {
  base: {
    normal: BaseNormal,
    angry: BaseAngry
  },
  eyes: {
    haha: EyesHaha,
    wow: EyesWow,
    sad: {
      high: EyesSadHigh,
      low: EyesSadLow
    },
    angry: {
      high: EyesAngryHigh,
      low: EyesAngryLow
    }
  },
  mouth: {
    haha: MouthHaha,
    wow: MouthWow,
    sad: MouthSad,
    angry: MouthAngry
  },
  tear: {
    high: TearHigh,
    low: TearLow
  }
};
