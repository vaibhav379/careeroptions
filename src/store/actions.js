export const setInterestsFormData = (section, question, value) => {
  return {
    type: "SET_INTERESTS_DATA",
    payload: { section: section, question: question, value: value },
  };
};

export const setSkillsFormData = (section, question, value) => {
    return {
      type: "SET_SKILLS_DATA",
      payload: { section: section, question: question, value: value },
    };
  };

  export const setPurposeFormData = (section, question, value) => {
    return {
      type: "SET_PURPOSE_DATA",
      payload: { section: section, question: question, value: value },
    };
  };

  export const setSocioFormData = (section, question, value) => {
    return {
      type: "SET_SOCIO_DATA",
      payload: { section: section, question: question, value: value },
    };
  };

  export const setUserDetails = (valueObj) => {
    return {
      type: "SET_USER_DETAILS",
      payload: { value: valueObj },
    };
  };
