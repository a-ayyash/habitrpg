import {translator as t} from '../helpers';
import events from '../events';

import {base as baseHead} from './sets/base';

import {head as healerHead} from './sets/healer';
import {head as rogueHead} from './sets/rogue';
import {head as warriorHead} from './sets/warrior';
import {head as wizardHead} from './sets/wizard';

import {head as mysteryHead} from './sets/mystery';

let head = {
  base: baseHead,

  warrior: warriorHead,
  rogue: rogueHead,
  wizard: wizardHead,
  healer: healerHead,

  special: {
    0: {
      text: t('headSpecial0Text'),
      notes: t('headSpecial0Notes', {
        int: 20
      }),
      int: 20,
      value: 150,
      canOwn: ((u) => {
        var ref;
        return +((ref = u.backer) != null ? ref.tier : void 0) >= 45;
      })
    },
    1: {
      text: t('headSpecial1Text'),
      notes: t('headSpecial1Notes', {
        attrs: 6
      }),
      con: 6,
      str: 6,
      per: 6,
      int: 6,
      value: 170,
      canOwn: ((u) => {
        var ref;
        return +((ref = u.contributor) != null ? ref.level : void 0) >= 3;
      })
    },
    2: {
      text: t('headSpecial2Text'),
      notes: t('headSpecial2Notes', {
        attrs: 25
      }),
      int: 25,
      str: 25,
      value: 200,
      canOwn: ((u) => {
        var ref;
        return (+((ref = u.backer) != null ? ref.tier : void 0) >= 300) || (u.items.gear.owned.head_special_2 != null);
      })
    },
    fireCoralCirclet: {
      text: t('headSpecialFireCoralCircletText'),
      notes: t('headSpecialFireCoralCircletNotes', {
        per: 15
      }),
      per: 15,
      value: 130,
      canOwn: ((u) => {
        return u.items.gear.owned.head_special_fireCoralCirclet != null;
      })
    },
    nye: {
      event: events.winter,
      text: t('headSpecialNyeText'),
      notes: t('headSpecialNyeNotes'),
      value: 0
    },
    yeti: {
      event: events.winter,
      specialClass: 'warrior',
      text: t('headSpecialYetiText'),
      notes: t('headSpecialYetiNotes', {
        str: 9
      }),
      str: 9,
      value: 60
    },
    ski: {
      event: events.winter,
      specialClass: 'rogue',
      text: t('headSpecialSkiText'),
      notes: t('headSpecialSkiNotes', {
        per: 9
      }),
      per: 9,
      value: 60
    },
    candycane: {
      event: events.winter,
      specialClass: 'wizard',
      text: t('headSpecialCandycaneText'),
      notes: t('headSpecialCandycaneNotes', {
        per: 7
      }),
      per: 7,
      value: 60
    },
    snowflake: {
      event: events.winter,
      specialClass: 'healer',
      text: t('headSpecialSnowflakeText'),
      notes: t('headSpecialSnowflakeNotes', {
        int: 7
      }),
      int: 7,
      value: 60
    },
    springRogue: {
      event: events.spring,
      specialClass: 'rogue',
      text: t('headSpecialSpringRogueText'),
      notes: t('headSpecialSpringRogueNotes', {
        per: 9
      }),
      value: 60,
      per: 9
    },
    springWarrior: {
      event: events.spring,
      specialClass: 'warrior',
      text: t('headSpecialSpringWarriorText'),
      notes: t('headSpecialSpringWarriorNotes', {
        str: 9
      }),
      value: 60,
      str: 9
    },
    springMage: {
      event: events.spring,
      specialClass: 'wizard',
      text: t('headSpecialSpringMageText'),
      notes: t('headSpecialSpringMageNotes', {
        per: 7
      }),
      value: 60,
      per: 7
    },
    springHealer: {
      event: events.spring,
      specialClass: 'healer',
      text: t('headSpecialSpringHealerText'),
      notes: t('headSpecialSpringHealerNotes', {
        int: 7
      }),
      value: 60,
      int: 7
    },
    summerRogue: {
      event: events.summer,
      specialClass: 'rogue',
      text: t('headSpecialSummerRogueText'),
      notes: t('headSpecialSummerRogueNotes', {
        per: 9
      }),
      value: 60,
      per: 9
    },
    summerWarrior: {
      event: events.summer,
      specialClass: 'warrior',
      text: t('headSpecialSummerWarriorText'),
      notes: t('headSpecialSummerWarriorNotes', {
        str: 9
      }),
      value: 60,
      str: 9
    },
    summerMage: {
      event: events.summer,
      specialClass: 'wizard',
      text: t('headSpecialSummerMageText'),
      notes: t('headSpecialSummerMageNotes', {
        per: 7
      }),
      value: 60,
      per: 7
    },
    summerHealer: {
      event: events.summer,
      specialClass: 'healer',
      text: t('headSpecialSummerHealerText'),
      notes: t('headSpecialSummerHealerNotes', {
        int: 7
      }),
      value: 60,
      int: 7
    },
    fallRogue: {
      event: events.fall,
      specialClass: 'rogue',
      text: t('headSpecialFallRogueText'),
      notes: t('headSpecialFallRogueNotes', {
        per: 9
      }),
      value: 60,
      per: 9
    },
    fallWarrior: {
      event: events.fall,
      specialClass: 'warrior',
      text: t('headSpecialFallWarriorText'),
      notes: t('headSpecialFallWarriorNotes', {
        str: 9
      }),
      value: 60,
      str: 9
    },
    fallMage: {
      event: events.fall,
      specialClass: 'wizard',
      text: t('headSpecialFallMageText'),
      notes: t('headSpecialFallMageNotes', {
        per: 7
      }),
      value: 60,
      per: 7
    },
    fallHealer: {
      event: events.fall,
      specialClass: 'healer',
      text: t('headSpecialFallHealerText'),
      notes: t('headSpecialFallHealerNotes', {
        int: 7
      }),
      value: 60,
      int: 7
    },
    winter2015Rogue: {
      event: events.winter2015,
      specialClass: 'rogue',
      text: t('headSpecialWinter2015RogueText'),
      notes: t('headSpecialWinter2015RogueNotes', {
        per: 9
      }),
      value: 60,
      per: 9
    },
    winter2015Warrior: {
      event: events.winter2015,
      specialClass: 'warrior',
      text: t('headSpecialWinter2015WarriorText'),
      notes: t('headSpecialWinter2015WarriorNotes', {
        str: 9
      }),
      value: 60,
      str: 9
    },
    winter2015Mage: {
      event: events.winter2015,
      specialClass: 'wizard',
      text: t('headSpecialWinter2015MageText'),
      notes: t('headSpecialWinter2015MageNotes', {
        per: 7
      }),
      value: 60,
      per: 7
    },
    winter2015Healer: {
      event: events.winter2015,
      specialClass: 'healer',
      text: t('headSpecialWinter2015HealerText'),
      notes: t('headSpecialWinter2015HealerNotes', {
        int: 7
      }),
      value: 60,
      int: 7
    },
    nye2014: {
      text: t('headSpecialNye2014Text'),
      notes: t('headSpecialNye2014Notes'),
      value: 0,
      canOwn: ((u) => {
        return u.items.gear.owned.head_special_nye2014 != null;
      })
    },
    spring2015Rogue: {
      event: events.spring2015,
      specialClass: 'rogue',
      text: t('headSpecialSpring2015RogueText'),
      notes: t('headSpecialSpring2015RogueNotes', {
        per: 9
      }),
      value: 60,
      per: 9
    },
    spring2015Warrior: {
      event: events.spring2015,
      specialClass: 'warrior',
      text: t('headSpecialSpring2015WarriorText'),
      notes: t('headSpecialSpring2015WarriorNotes', {
        str: 9
      }),
      value: 60,
      str: 9
    },
    spring2015Mage: {
      event: events.spring2015,
      specialClass: 'wizard',
      text: t('headSpecialSpring2015MageText'),
      notes: t('headSpecialSpring2015MageNotes', {
        per: 7
      }),
      value: 60,
      per: 7
    },
    spring2015Healer: {
      event: events.spring2015,
      specialClass: 'healer',
      text: t('headSpecialSpring2015HealerText'),
      notes: t('headSpecialSpring2015HealerNotes', {
        int: 7
      }),
      value: 60,
      int: 7
    },
    summer2015Rogue: {
      event: events.summer2015,
      specialClass: 'rogue',
      text: t('headSpecialSummer2015RogueText'),
      notes: t('headSpecialSummer2015RogueNotes', {
        per: 9
      }),
      value: 60,
      per: 9
    },
    summer2015Warrior: {
      event: events.summer2015,
      specialClass: 'warrior',
      text: t('headSpecialSummer2015WarriorText'),
      notes: t('headSpecialSummer2015WarriorNotes', {
        str: 9
      }),
      value: 60,
      str: 9
    },
    summer2015Mage: {
      event: events.summer2015,
      specialClass: 'wizard',
      text: t('headSpecialSummer2015MageText'),
      notes: t('headSpecialSummer2015MageNotes', {
        per: 7
      }),
      value: 60,
      per: 7
    },
    summer2015Healer: {
      event: events.summer2015,
      specialClass: 'healer',
      text: t('headSpecialSummer2015HealerText'),
      notes: t('headSpecialSummer2015HealerNotes', {
        int: 7
      }),
      value: 60,
      int: 7
    },
    fall2015Rogue: {
      event: events.fall2015,
      specialClass: 'rogue',
      text: t('headSpecialFall2015RogueText'),
      notes: t('headSpecialFall2015RogueNotes', {
        per: 9
      }),
      value: 60,
      per: 9
    },
    fall2015Warrior: {
      event: events.fall2015,
      specialClass: 'warrior',
      text: t('headSpecialFall2015WarriorText'),
      notes: t('headSpecialFall2015WarriorNotes', {
        str: 9
      }),
      value: 60,
      str: 9
    },
    fall2015Mage: {
      event: events.fall2015,
      specialClass: 'wizard',
      text: t('headSpecialFall2015MageText'),
      notes: t('headSpecialFall2015MageNotes', {
        per: 7
      }),
      value: 60,
      per: 7
    },
    fall2015Healer: {
      event: events.fall2015,
      specialClass: 'healer',
      text: t('headSpecialFall2015HealerText'),
      notes: t('headSpecialFall2015HealerNotes', {
        int: 7
      }),
      value: 60,
      int: 7
    },
    gaymerx: {
      event: events.gaymerx,
      text: t('headSpecialGaymerxText'),
      notes: t('headSpecialGaymerxNotes'),
      value: 0
    }
  },
  mystery: mysteryHead,
  armoire: {
    lunarCrown: {
      text: t('headArmoireLunarCrownText'),
      notes: t('headArmoireLunarCrownNotes', {
        con: 7,
        per: 7
      }),
      value: 100,
      con: 7,
      per: 7,
      set: 'soothing',
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_lunarCrown != null;
      })
    },
    redHairbow: {
      text: t('headArmoireRedHairbowText'),
      notes: t('headArmoireRedHairbowNotes', {
        str: 5,
        int: 5,
        con: 5
      }),
      value: 100,
      str: 5,
      int: 5,
      con: 5,
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_redHairbow != null;
      })
    },
    violetFloppyHat: {
      text: t('headArmoireVioletFloppyHatText'),
      notes: t('headArmoireVioletFloppyHatNotes', {
        per: 5,
        int: 5,
        con: 5
      }),
      value: 100,
      per: 5,
      int: 5,
      con: 5,
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_violetFloppyHat != null;
      })
    },
    gladiatorHelm: {
      text: t('headArmoireGladiatorHelmText'),
      notes: t('headArmoireGladiatorHelmNotes', {
        per: 7,
        int: 7
      }),
      value: 100,
      per: 7,
      int: 7,
      set: 'gladiator',
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_gladiatorHelm != null;
      })
    },
    rancherHat: {
      text: t('headArmoireRancherHatText'),
      notes: t('headArmoireRancherHatNotes', {
        str: 5,
        per: 5,
        int: 5
      }),
      value: 100,
      str: 5,
      per: 5,
      int: 5,
      set: 'rancher',
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_rancherHat != null;
      })
    },
    royalCrown: {
      text: t('headArmoireRoyalCrownText'),
      notes: t('headArmoireRoyalCrownNotes', {
        str: 10
      }),
      value: 100,
      str: 10,
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_royalCrown != null;
      })
    },
    blueHairbow: {
      text: t('headArmoireBlueHairbowText'),
      notes: t('headArmoireBlueHairbowNotes', {
        per: 5,
        int: 5,
        con: 5
      }),
      value: 100,
      per: 5,
      int: 5,
      con: 5,
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_blueHairbow != null;
      })
    },
    goldenLaurels: {
      text: t('headArmoireGoldenLaurelsText'),
      notes: t('headArmoireGoldenLaurelsNotes', {
        attrs: 8
      }),
      value: 100,
      per: 8,
      con: 8,
      set: 'goldenToga',
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_goldenLaurels != null;
      })
    },
    hornedIronHelm: {
      text: t('headArmoireHornedIronHelmText'),
      notes: t('headArmoireHornedIronHelmNotes', {
        con: 9,
        str: 7
      }),
      value: 100,
      con: 9,
      str: 7,
      set: 'hornedIron',
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_hornedIronHelm != null;
      })
    },
    yellowHairbow: {
      text: t('headArmoireYellowHairbowText'),
      notes: t('headArmoireYellowHairbowNotes', {
        attrs: 5
      }),
      value: 100,
      int: 5,
      per: 5,
      str: 5,
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_yellowHairbow != null;
      })
    },
    redFloppyHat: {
      text: t('headArmoireRedFloppyHatText'),
      notes: t('headArmoireRedFloppyHatNotes', {
        attrs: 6
      }),
      value: 100,
      con: 6,
      int: 6,
      per: 6,
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_redFloppyHat != null;
      })
    },
    plagueDoctorHat: {
      text: t('headArmoirePlagueDoctorHatText'),
      notes: t('headArmoirePlagueDoctorHatNotes', {
        int: 5,
        str: 6,
        con: 5
      }),
      value: 100,
      int: 5,
      str: 6,
      con: 5,
      set: 'plagueDoctor',
      canOwn: ((u) => {
        return u.items.gear.owned.head_armoire_plagueDoctorHat != null;
      })
    }
  }
};

export default head;