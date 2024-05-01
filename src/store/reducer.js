import { combineReducers } from "redux";
import { interestsSection } from "../config/FormData/InterestsData";
import { getResponseModelFromSectionModel } from "../util/utils";
import { skillsSection } from "../config/FormData/SkillsData";
import { purposeSections } from "../config/FormData/PurposeData";
import { socioEconomicSections } from "../config/FormData/SocioEconomicData";

const initialState = {
  userDetails: {},
  interestsForm: getResponseModelFromSectionModel(interestsSection),
  skillsForm: getResponseModelFromSectionModel(skillsSection),
  purposeForm: getResponseModelFromSectionModel(purposeSections),
  socioEconomicForm: getResponseModelFromSectionModel(socioEconomicSections),
};

const setInterestData = (state, action) => {
  return {
    ...state,
    interestsForm: {
      ...state.interestsForm,
      [action.payload.section]: {
        ...state.interestsForm[action.payload.section],
        [action.payload.question]: action.payload.value,
      },
    },
  };
};

const setSkillsData = (state, action) => {
  return {
    ...state,
    skillsForm: {
      ...state.skillsForm,
      [action.payload.section]: {
        ...state.skillsForm[action.payload.section],
        [action.payload.question]: action.payload.value,
      },
    },
  };
};

const setPurposeData = (state, action) => {
  return {
    ...state,
    purposeForm: {
      ...state.purposeForm,
      [action.payload.section]: {
        ...state.purposeForm[action.payload.section],
        [action.payload.question]: action.payload.value,
      },
    },
  };
};

const setSocioData = (state, action) => {
  return {
    ...state,
    socioEconomicForm: {
      ...state.socioEconomicForm,
      [action.payload.section]: {
        ...state.socioEconomicForm[action.payload.section],
        [action.payload.question]: action.payload.value,
      },
    },
  };
};

const setUserDetails = (state, action) => {
  return {
    ...state,
    name: action.payload.value,
  };
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INTERESTS_DATA":
      return setInterestData(state, action);
    case "SET_SKILLS_DATA":
      return setSkillsData(state, action);
    case "SET_PURPOSE_DATA":
      return setPurposeData(state, action);
    case "SET_SOCIO_DATA":
      return setSocioData(state, action);
    case "SET_USER_DETAILS":
      return setUserDetails(state, action);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
