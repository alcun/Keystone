import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled, { css } from "styled-components/macro";
import { FaCheckCircle } from "react-icons/fa";

const InlineInputs = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const InlineInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const InlineInputDropdown = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
  border-radius: 10px;

  option {
    padding: 15px;
    margin-top: 10px;
  }

  select {
    padding: 15px;
    margin-top: 10px;
    width: 18%;
    border-radius: 5px;
    background-color: #fff;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const DateInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-left: 10px;
    width: 18%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const SignConsent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Checkboxes = styled.div`
  // display: flex;
  flex-direction: column;
  background-color: white;
  padding: 5px 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;

const CompleteIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 35px;
`;

const TickIcon = styled(FaCheckCircle)`
  color: #12b886;
  font-size: 8rem;
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const CheckboxRow2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CheckboxColumn = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }

  div {
    display: flex;
    align-items: flex-start;

    label {
      margin-top: 7px;
    }
 
  }

  input {
    margin-right: 5px;
    // height: 18px;
    // width: 18px;
  }
`;

const formSection = css`
  background-color: white;
  padding: 10px 60px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 80vw;
  border: solid #12b886 2px;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

  h1 {
    text-align: center;
    color: #12b886;

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 100vh;
  // background-color: #330033;
  background-color: #fff;

  form {
    margin-top: 50px;

    SubmitBtnWrapper {
      background-color: white;
    }
  }

  h1 {
    text-align: center;
    color: #12b886;
  }

  h5 {
    text-align: right;
    color: #12b886;
    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  .field1 {
    ${formSection}
  }

  .field2 {
    ${formSection}
  }
  .field3 {
    ${formSection}
  }
  .field4 {
    ${formSection}
  }

  .field5 {
    ${formSection}
  }

  .field6 {
    ${formSection}
  }

  .field7 {
    ${formSection}
  }

  .field8 {
    ${formSection}
  }

  .field9 {
    ${formSection}

    p {
      text-align: center;
      color: #12b886;
    }

    h1 {
    text-align: center;
    width: 100%;

    }
    
    }
  }

  input {
    padding: 15px;
    margin-top: 10px;

    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid grey;
  }

  textarea {
    padding: 15px;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid grey;
  }
`;

const FormSubmittedPage = styled.div`
  ${formSection}
`;

const ButtonRow = styled.div`
  display: flex;

  button {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 2px solid white;
    background-color: #12b886;
    color: white;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
    &:hover {
      transform: translateY(-2px);
      background: white;
      color: #12b886;
      border: 2px #12b886 solid;
      transition: 0.3s;
      box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    }
  }
  a {
    text-decoration: none;

    width: 100%;
    height: 50px;
    padding: 10px;
    border: 2px solid white;
    background-color: #12b886;
    color: white;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;

    &:hover {
      transform: translateY(-2px);
      background: white;
      color: #12b886;
      border: 2px #12b886 solid;
      transition: all ease 0.5s;
      box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    }
  }
`;

const SubmitButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 2px solid white;
    background-color: #12b886;
    color: white;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;

    &:hover {
      transform: translateY(-2px);
      background: white;
      color: #12b886;
      border: 2px #12b886 solid;
      transition: all ease 0.5s;
      box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    }
  }
`;

export default function HealthForm() {
  const [form, setForm] = useState({
    title: "",
    forename: "",
    surname: "",
    age: "",
    dob: "",
    postcode: "",
    address: "",
    phone: "",
    email: "",
    firstSession: "",

    heardAbout: "",
    expectations: "",
    occupation: "",
    sports: "",
    sportsFrequency: "",
    livesWith: "",
    otherTreatment: "",

    smoker: "",
    perDay: "",
    smokerYears: "",
    exSmoker: "",
    exSmokerYears: "",
    exSmokerPerDay: "",
    exSmokerQuit: "",

    conditions1: "",
    medication: "",
    medicationCurrent: "",
    medicationPast: "",
    otherConditions1: "",

    conditions2: "",
    otherConditions2: "",
    gpVisit: "",
    gpVisitReason: "",

    painLocation: "",
    painDescription: "",
    painType: "",

    painOccurs: "",
    painActivity: "",
    painAggravate: "",
    painRelief: "",
    painHistory: "",
    painWorsening: "",
    painFrequency: "",
    painLevel: "",
    painLength: "",

    consentName: "",
    consentDate: "",
  });

  const [count, setCount] = useState(1);

  const [formSubmitted, setFormSubmitted] = useState();

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target);
    console.log(form);
  };

  const updateFormMultiple = (e) => {
    setForm({
      ...form,
      [e.target.name]: form.conditions1 + " + " + e.target.value,
    });
    console.log(e.target);
    console.log(form);
  };

  const updateFormMultiple2 = (e) => {
    setForm({
      ...form,
      [e.target.name]: form.conditions2 + " + " + e.target.value,
    });
    console.log(e.target);
    console.log(form);
  };

  const updateFormMultiple3 = (e) => {
    setForm({
      ...form,
      [e.target.name]: form.painType + " + " + e.target.value,
    });
    console.log(e.target);
    console.log(form);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fpi07h2",
        "template_iwefluh",
        e.target,
        "4cVipHVQpm5yOngzb"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
    setCount(count + 1);
    document.getElementById("title").scrollIntoView();
  };

  const prevPage = () => {
    setCount(count - 1);
    document.getElementById("title").scrollIntoView();
  };

  const nextPage = () => {
    setCount(count + 1);
    document.getElementById("title").scrollIntoView();
  };
  return (
    <FormContainer
      id="title"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <form onSubmit={sendEmail}>
        {/* //PAGE1 */}

        <div
          className="field1"
          style={{ display: count === 1 ? "flex" : "none" }}
        >
          <h5 className="form-step">Page {count} of 8 </h5>
          <h1>PATIENT DETAILS</h1> <br />
          <InlineInputDropdown>
            <label>Title</label>
            <select name="title" onChange={updateForm}>
              <option type="radio" id="titleMr" value="Mr">
                Mr{" "}
              </option>

              <option type="radio" id="titleMrs" value="Mrs">
                Mrs
              </option>

              <option type="radio" id="titleMiss" value="Miss">
                Miss
              </option>

              <option type="radio" id="titleMs" value="Ms">
                Ms
              </option>

              <option type="radio" id="titleDr" value="Dr">
                Dr
              </option>
            </select>
          </InlineInputDropdown>{" "}
          <br />
          <InlineInputs>
            <InlineInput>
              <label>Forename</label>
              <input
                type="text"
                className="form-input"
                name="forename"
                placeholder="Forename"
                onChange={updateForm}
                value={form.forename}
              />
            </InlineInput>
            <InlineInput>
              <label>Surname</label>
              <input
                type="text"
                className="form-input"
                name="surname"
                placeholder="Surname"
                onChange={updateForm}
                value={form.surname}
              />
            </InlineInput>
          </InlineInputs>
          <InlineInputs>
            <InlineInput>
              <label>Age</label>
              <input
                type="number"
                className="form-input"
                name="age"
                placeholder="Age"
                onChange={updateForm}
                value={form.age}
              />
            </InlineInput>
            <InlineInput>
              <label>DOB</label>
              <input
                type="date"
                className="form-input"
                name="dob"
                placeholder=""
                onChange={updateForm}
                value={form.dob}
              />
            </InlineInput>
          </InlineInputs>
          <InlineInputs>
            <InlineInput>
              <label>Postcode</label>
              <input
                type="text"
                className="form-input"
                name="postcode"
                placeholder="Postcode"
                onChange={updateForm}
                value={form.postcode}
              />
            </InlineInput>
            <InlineInput>
              <label>Address</label>
              <input
                type="text"
                className="form-input"
                name="address"
                placeholder="Address"
                onChange={updateForm}
                value={form.address}
              />
            </InlineInput>
          </InlineInputs>
          <InlineInputs>
            <InlineInput>
              <label>Contact Number</label>
              <input
                type="tel"
                className="form-input"
                name="phone"
                placeholder="Phone"
                onChange={updateForm}
                value={form.phone}
              />{" "}
            </InlineInput>
            <InlineInput>
              <label>Email</label>
              <input
                type="email"
                className="form-input"
                name="email"
                placeholder="E-mail"
                onChange={updateForm}
                value={form.email}
              />
            </InlineInput>
          </InlineInputs>
          <DateInput>
            <label> When is your first session booked for? </label>
            <input
              type="date"
              className="form-input"
              name="firstSession"
              placeholder=""
              onChange={updateForm}
              value={form.firstSession}
            />
          </DateInput>
        </div>

        {/* //PAGE2 */}

        <div
          className="field2"
          style={{ display: count === 2 ? "flex" : "none" }}
        >
          <h5 className="form-step">Page {count} of 8 </h5>

          <h1>PATIENT DETAILS CONTINUED</h1>
          <br />

          {/* <label> How did you hear about the clinic? </label>
          <input
            type="text"
            className="form-input"
            name="heardAbout"
            placeholder="I Heard From"
            onChange={updateForm}
            value={form.heardAbout}
          />
          <label> What are your hopes and expectations? </label>
          <input
            type="text"
            className="form-input"
            name="expectations"
            placeholder="Hopes and Expectations"
            onChange={updateForm}
            value={form.expectations}
          /> */}

          <InlineInputs>
            <InlineInput>
              <label> Do you do any sports/activities?</label>
              <input
                type="text"
                className="form-input"
                name="sports"
                placeholder="Sports"
                onChange={updateForm}
                value={form.sports}
              />
            </InlineInput>
            <InlineInput>
              <label>How often?</label>
              <input
                type="text"
                className="form-input"
                name="sportsFrequency"
                placeholder="Frequency"
                onChange={updateForm}
                value={form.sportsFrequency}
              />
            </InlineInput>
          </InlineInputs>
          <InlineInput>

          <label> What is your current occupation? </label>
          <input
            type="text"
            className="form-input"
            name="occupation"
            placeholder="Occupation"
            onChange={updateForm}
            value={form.occupation}
          />
            </InlineInput>
            <InlineInput>

          <label> Who do you live at home with? </label>
          <input
            type="text"
            className="form-input"
            name="livesWith"
            placeholder="I Live With"
            onChange={updateForm}
            value={form.livesWith}
          />
                      </InlineInput>

            <InlineInput>

          <label>
            {" "}
            Have you ever sought after anyother form of manual therapy for your
            current condition(s)?{" "}
          </label>
          <input
            type="text"
            className="form-input"
            name="otherTreatment"
            placeholder="Other Treatments"
            onChange={updateForm}
            value={form.otherTreatment}
          />
                      </InlineInput>

        </div>
        

        {/* //PAGE3 SMOKING*/}

        <div
          className="field3"
          style={{ display: count === 3 ? "flex" : "none" }}
        >
          <h5 className="form-step"> Page {count} of 8 </h5>

          <h1>HEALTH SCREEN</h1>
          <br />

          <InlineInputDropdown>
            <label> Are you a smoker? </label>
            <select name="smoker" onChange={updateForm}>
              <option id="smokerNo" value="No">
                No
              </option>

              <option id="smokerYes" value="Yes">
                Yes
              </option>
            </select>
          </InlineInputDropdown>
          <br />
          <InlineInputs>
            <InlineInput>
              <label> For how many years? </label>
              <input
                type="number"
                className="form-input"
                name="smokerYears"
                placeholder="Years Smoked"
                onChange={updateForm}
                value={form.smokerYears}
              />
            </InlineInput>
            <InlineInput>
              <label> How many a day? </label>
              <input
                type="number"
                className="form-input"
                name="perDay"
                placeholder="Per Day"
                onChange={updateForm}
                value={form.perDay}
              />
            </InlineInput>
          </InlineInputs>

          <InlineInputDropdown>
            <label> Are you an ex-smoker? </label>

            <select name="exSmoker" onChange={updateForm}>
              <option id="exSmokerNo" value="No">
                No
              </option>

              <option id="exSmokerYes" value="Yes">
                Yes
              </option>
            </select>
          </InlineInputDropdown>
          <br />
          <InlineInputs>
            <InlineInput>
              <label> For how many years?</label>
              <input
                type="number"
                className="form-input"
                name="exSmokerYears"
                placeholder="Years Smoked"
                onChange={updateForm}
                value={form.exSmokerYears}
              />
            </InlineInput>
            <InlineInput>
              <label> How many a day? </label>
              <input
                type="number"
                className="form-input"
                name="exSmokerPerDay"
                placeholder="Per Day"
                onChange={updateForm}
                value={form.exSmokerPerDay}
              />
            </InlineInput>
            <InlineInput>
              <label> When did you quit? </label>
              <input
                type="text"
                className="form-input"
                name="exSmokerQuit"
                placeholder="Years Ago"
                onChange={updateForm}
                value={form.exSmokerQuit}
              />
            </InlineInput>
          </InlineInputs>
        </div>

        {/* //PAGE4  HEALTH SCREEN AND CONDITIONS*/}

        <div
          className="field4"
          style={{ display: count === 4 ? "flex" : "none" }}
        >
          <h5 className="form-step"> Page {count} of 8 </h5>

          <h1>HEALTH SCREEN CONTINUED</h1>
          <br />

          <Checkboxes>
            <label>
              {" "}
              Please indicate if you have ever suffered from any of the
              following:{" "}
            </label>{" "}
            <br />
            <br />
            <CheckboxRow>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="bloodVirus"
                    name="conditions1"
                    value=" Blood Virus"
                    onChange={updateFormMultiple}
                  />
                  <label>Any Blood Born Viruses (HIV Hepatitis B or C)</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="fainting"
                    name="conditions1"
                    value=" Fainting"
                    onChange={updateFormMultiple}
                  />
                  <label>Fainting</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="seizures"
                    name="conditions1"
                    value=" Seizures / Epilepsy"
                    onChange={updateFormMultiple}
                  />
                  <label>Seizures / Epilepsy</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="diabetes"
                    name="conditions1"
                    value=" Diabetes"
                    onChange={updateFormMultiple}
                  />
                  <label>Diabetes</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="bloodClot"
                    name="conditions1"
                    value=" Blood Clotting Disorders"
                    onChange={updateFormMultiple}
                  />
                  <label>Blood Clotting Disorders</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="dvt"
                    name="conditions1"
                    value=" DVT"
                    onChange={updateFormMultiple}
                  />
                  <label>DVT</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="stroke"
                    name="conditions1"
                    value=" Stroke"
                    onChange={updateFormMultiple}
                  />
                  <label>Stroke</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="heart attack"
                    name="conditions1"
                    value=" Heart Attack"
                    onChange={updateFormMultiple}
                  />
                  <label>Heart Attack</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="anaemia"
                    name="conditions1"
                    value=" Anaemia"
                    onChange={updateFormMultiple}
                  />
                  <label>Anaemia</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="noneAbove"
                    name="conditions1"
                    value=" None of above"
                    onChange={updateFormMultiple}
                  />
                  <label>None of above</label>
                </div>
              </CheckboxColumn>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="poorHealing"
                    name="conditions1"
                    value=" Poor Healing"
                    onChange={updateFormMultiple}
                  />
                  <label>Poor Healing</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="bloodPhobia"
                    name="conditions1"
                    value=" Blood/Needle Phobias"
                    onChange={updateFormMultiple}
                  />
                  <label>Blood/Needle Phobias</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="cancer"
                    name="conditions1"
                    value=" Form of Cancer"
                    onChange={updateFormMultiple}
                  />
                  <label>Any Form of Cancer</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="neurological"
                    name="conditions1"
                    value=" Neurological Disorders"
                    onChange={updateFormMultiple}
                  />
                  <label>Neurological Disorders</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="currentInfection"
                    name="conditions1"
                    value=" Current Infections"
                    onChange={updateFormMultiple}
                  />
                  <label>Current Infections</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="previousO"
                    name="conditions1"
                    value=" Recent Operation"
                    onChange={updateFormMultiple}
                  />
                  <label>Recent Operation</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="bloodThinningMeds"
                    name="conditions1"
                    value=" Blood Thinning Medication"
                    onChange={updateFormMultiple}
                  />
                  <label>Used Blood Thinning Medication</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="weightLoss"
                    name="conditions1"
                    value=" Unintentional Weight Loss"
                    onChange={updateFormMultiple}
                  />
                  <label>Unintentional Weight Loss</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="keloidScarring"
                    name="conditions1"
                    value=" Keloid Scarring"
                    onChange={updateFormMultiple}
                  />
                  <label>Keloid Scarring</label>
                </div>
              </CheckboxColumn>
            </CheckboxRow>
          </Checkboxes>

          <InlineInputs>
            <InlineInput>
              <label>Do you suffer from any other health problems? </label>
              <input
                type="text"
                className="form-input"
                name="otherConditions1"
                placeholder="Other Conditions"
                onChange={updateForm}
                value={form.otherConditions1}
              />{" "}
            </InlineInput>
          </InlineInputs>
          <InlineInputDropdown>
            <label> Do you take any medication? </label>

            <select name="medication" onChange={updateForm}>
              <option id="medYes" value="No">
                No
              </option>

              <option id="medNo" value="Yes">
                Yes
              </option>
            </select>
          </InlineInputDropdown>

          <InlineInputs>
            <InlineInput>
              <input
                type="text"
                className="form-input"
                name="medicationCurrent"
                placeholder="Current"
                onChange={updateForm}
                value={form.medicationCurrent}
              />
            </InlineInput>
            <InlineInput>
              <input
                type="text"
                className="form-input"
                name="medicationPast"
                placeholder="Past"
                onChange={updateForm}
                value={form.medicationPast}
              />
            </InlineInput>
          </InlineInputs>
        </div>

        {/* //PAGE 5 MEDICAL HISTORY */}

        <div
          className="field5"
          style={{ display: count === 5 ? "flex" : "none" }}
        >
          <h5 className="form-step"> Page {count} of 8 </h5>
          <h1>MEDICAL HISTORY AND REVIEW OF SYSTEMS</h1>
          <br />
          <p>
            Please indicate below if you suffer with or have previously suffered
            with any of the following health problems:
          </p>
          <br />
          <Checkboxes>
            <h4>CARDIO-RESPIRATORY</h4>
            <CheckboxRow2>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="cardioHeart"
                    name="conditions2"
                    value=" Heart Problems"
                    onChange={updateFormMultiple2}
                  />
                  <label>Heart Problems</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="highBlood"
                    name="conditions2"
                    value=" High Blood Pressure"
                    onChange={updateFormMultiple2}
                  />
                  <label>High Blood Pressure</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="dizziness"
                    name="conditions2"
                    value=" Dizziness on Standing"
                    onChange={updateFormMultiple2}
                  />
                  <label>Dizziness on Standing</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="highCholestrol"
                    name="conditions2"
                    value=" High Cholesterol"
                    onChange={updateFormMultiple2}
                  />
                  <label>High Cholesterol</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Chest Pains"
                    onChange={updateFormMultiple2}
                  />
                  <label>Chest Pains</label>
                </div>
              </CheckboxColumn>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Breathlessness / Wheezing"
                    onChange={updateFormMultiple2}
                  />
                  <label>Breathlessness / Wheezing</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Poor Circulation"
                    onChange={updateFormMultiple2}
                  />
                  <label>Poor Circulation</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Persistent Cough"
                    onChange={updateFormMultiple2}
                  />
                  <label>Persistent Cough</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Asthma / Bronchitis"
                    onChange={updateFormMultiple2}
                  />
                  <label>Asthma / Bronchitis</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Cardio-Respiratory Other"
                    onChange={updateFormMultiple2}
                  />
                  <label>Other</label>
                </div>
              </CheckboxColumn>
            </CheckboxRow2>
            <br />
            <h4>DIGESTIVE</h4>
            <CheckboxRow2>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Heart Burn"
                    onChange={updateFormMultiple2}
                  />
                  <label>Heart Burn</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Indigestion"
                    onChange={updateFormMultiple2}
                  />
                  <label>Indigestion</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Stomach Ulcer"
                    onChange={updateFormMultiple2}
                  />
                  <label>Stomach Ulcer</label>
                </div>
              </CheckboxColumn>

              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Bloatedness"
                    onChange={updateFormMultiple2}
                  />
                  <label>Bloatedness</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Liver Problems"
                    onChange={updateFormMultiple2}
                  />
                  <label>Liver Problems</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Constipation"
                    onChange={updateFormMultiple2}
                  />
                  <label>Constipation</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Digestive Other"
                    onChange={updateFormMultiple2}
                  />
                  <label>Other</label>
                </div>
              </CheckboxColumn>
            </CheckboxRow2>
            <br />
            <h4>PSYCHOSOCIAL</h4>
            <CheckboxRow2>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Stress"
                    onChange={updateFormMultiple2}
                  />
                  <label>Stress</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Anxiety"
                    onChange={updateFormMultiple2}
                  />
                  <label>Anxiety</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Nervousness"
                    onChange={updateFormMultiple2}
                  />
                  <label>Nervousness</label>
                </div>
              </CheckboxColumn>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Depression"
                    onChange={updateFormMultiple2}
                  />
                  <label>Depression</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Psychiatric Disorders"
                    onChange={updateFormMultiple2}
                  />
                  <label>Psychiatric Disorders</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Mood Swings"
                    onChange={updateFormMultiple2}
                  />
                  <label>Mood Swings</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Psychosocial Other"
                    onChange={updateFormMultiple2}
                  />
                  <label>Other</label>
                </div>
              </CheckboxColumn>
            </CheckboxRow2>{" "}
            <br />
            <h4>GENITOURINARY</h4>
            <CheckboxRow2>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Difficulty Passing Urine"
                    onChange={updateFormMultiple2}
                  />
                  <label>Difficulty Passing Urine</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Water Infections"
                    onChange={updateFormMultiple2}
                  />
                  <label>Water Infections</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Problems Controlling Urine"
                    onChange={updateFormMultiple2}
                  />
                  <label>Problems Controlling Urine</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Frequent Urination"
                    onChange={updateFormMultiple2}
                  />
                  <label>Frequent Urination</label>
                </div>
              </CheckboxColumn>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Kidney Problems"
                    onChange={updateFormMultiple2}
                  />
                  <label>Kidney Problems</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Enlarged Prostate"
                    onChange={updateFormMultiple2}
                  />
                  <label>Enlarged Prostate</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Reproductive Problems"
                    onChange={updateFormMultiple2}
                  />
                  <label>Reproductive Problems</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Genitourinary Other"
                    onChange={updateFormMultiple2}
                  />
                  <label>Other</label>
                </div>
              </CheckboxColumn>
            </CheckboxRow2>
            <br />
            <h4>HEAD & ENT </h4>
            <CheckboxRow2>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Visual Disturbances"
                    onChange={updateFormMultiple2}
                  />
                  <label>Visual Disturbances</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Loss of Balance"
                    onChange={updateFormMultiple2}
                  />
                  <label>Loss of Balance</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Vertigo"
                    onChange={updateFormMultiple2}
                  />
                  <label>Vertigo</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Migrane"
                    onChange={updateFormMultiple2}
                  />
                  <label>Migrane</label>
                </div>
              </CheckboxColumn>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Headaches"
                    onChange={updateFormMultiple2}
                  />
                  <label>Headaches</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Sinitus"
                    onChange={updateFormMultiple2}
                  />
                  <label>Sinitus</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Polyps"
                    onChange={updateFormMultiple2}
                  />
                  <label>Polyps</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Hearing Problems"
                    onChange={updateFormMultiple2}
                  />
                  <label>Hearing Problems</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Head and ENT Other"
                    onChange={updateFormMultiple2}
                  />
                  <label>Other</label>
                </div>
              </CheckboxColumn>
            </CheckboxRow2>
            <br />
            <h4>ENDOCRINE </h4>
            <CheckboxRow2>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Diabetes"
                    onChange={updateFormMultiple2}
                  />
                  <label>Diabetes</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Thyroid Problems"
                    onChange={updateFormMultiple2}
                  />
                  <label>Thyroid Problems</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Lack of Energy"
                    onChange={updateFormMultiple2}
                  />
                  <label>Lack of Energy</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Hot Flushes"
                    onChange={updateFormMultiple2}
                  />
                  <label>Hot Flushes</label>
                </div>
              </CheckboxColumn>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Restlessness"
                    onChange={updateFormMultiple2}
                  />
                  <label>Restlessness</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Irritability"
                    onChange={updateFormMultiple2}
                  />
                  <label>Irritability</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Sleeping Problems"
                    onChange={updateFormMultiple2}
                  />
                  <label>Sleeping Problems</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Loss of Appetite"
                    onChange={updateFormMultiple2}
                  />
                  <label>Loss of Appetite</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Endocrine Other"
                    onChange={updateFormMultiple2}
                  />
                  <label>Other</label>
                </div>
              </CheckboxColumn>
            </CheckboxRow2>
            <br />
            <h4>ORTHOPAEDIC </h4>
            <CheckboxRow2>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Arthritis"
                    onChange={updateFormMultiple2}
                  />
                  <label>Arthritis</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Broken Bones"
                    onChange={updateFormMultiple2}
                  />
                  <label>Broken Bones</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Hot Swollen Joints"
                    onChange={updateFormMultiple2}
                  />
                  <label>Hot Swollen Joints</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Joint Pain"
                    onChange={updateFormMultiple2}
                  />
                  <label>Joint Pain</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Back Pain"
                    onChange={updateFormMultiple2}
                  />
                  <label>Back Pain</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Leg Pain"
                    onChange={updateFormMultiple2}
                  />
                  <label>Leg Pain</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Leg Numbness"
                    onChange={updateFormMultiple2}
                  />
                  <label>Leg Numbness</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Neck Pain"
                    onChange={updateFormMultiple2}
                  />
                  <label>Neck Pain</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Arm Pain"
                    onChange={updateFormMultiple2}
                  />
                  <label>Arm Pain</label>
                </div>
              </CheckboxColumn>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Arm Numbness"
                    onChange={updateFormMultiple2}
                  />
                  <label>Arm Numbness</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Muscle Weakness"
                    onChange={updateFormMultiple2}
                  />
                  <label>Muscle Weakness</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Muscle Pain"
                    onChange={updateFormMultiple2}
                  />
                  <label>Muscle Pain</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Shoulder Problems"
                    onChange={updateFormMultiple2}
                  />
                  <label>Shoulder Problems</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Tennis Elbow"
                    onChange={updateFormMultiple2}
                  />
                  <label>Tennis Elbow</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Wrist Pain"
                    onChange={updateFormMultiple2}
                  />
                  <label>Wrist Pain</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Sprains / Strains"
                    onChange={updateFormMultiple2}
                  />
                  <label>Sprains / Strains</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Cramps"
                    onChange={updateFormMultiple2}
                  />
                  <label>Cramps</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Gout"
                    onChange={updateFormMultiple2}
                  />
                  <label>Gout</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Orthopaedic Other"
                    onChange={updateFormMultiple2}
                  />
                  <label>Other</label>
                </div>
              </CheckboxColumn>
            </CheckboxRow2>
            <br />
            <h4>DERMATOLOGICAL </h4>
            <CheckboxRow2>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Eczema / Psoriasis"
                    onChange={updateFormMultiple2}
                  />
                  <label>Eczema / Psoriasis</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Bleeding / Unusual Moles"
                    onChange={updateFormMultiple2}
                  />
                  <label>Bleeding / Unusual Moles</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Shingles"
                    onChange={updateFormMultiple2}
                  />
                  <label>Shingles</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Poor Healing"
                    onChange={updateFormMultiple2}
                  />
                  <label>Poor Healing</label>
                </div>
              </CheckboxColumn>{" "}
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Boils"
                    onChange={updateFormMultiple2}
                  />
                  <label>Boils</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Dry Skin"
                    onChange={updateFormMultiple2}
                  />
                  <label>Dry Skin</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Allergies"
                    onChange={updateFormMultiple2}
                  />
                  <label>Allergies</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="conditions2"
                    value=" Dermatological Other"
                    onChange={updateFormMultiple2}
                  />
                  <label>Other</label>
                </div>
              </CheckboxColumn>{" "}
            </CheckboxRow2>
          </Checkboxes>
          <InlineInput>
            <label>Please State Any Other Conditions Here</label>
            <input
              type="text"
              className="form-input"
              name="otherConditions2"
              placeholder="Other Conditions"
              onChange={updateForm}
              value={form.otherConditions2}
            />
          </InlineInput>{" "}
          <InlineInputDropdown>
            <label> Have You Visited your GP in the last 6 months? </label>
            <select name="gpVisit" onChange={updateForm}>
              <option id="horns" value="No">
                No
              </option>

              <option id="horns" value="Yes">
                Yes
              </option>
            </select>
          </InlineInputDropdown>
          <br />
          <InlineInputs>
            <InlineInput>
              <label>If Yes, Why?</label>
              <input
                type="text"
                className="form-input"
                name="gpVisitReason"
                placeholder="Reason"
                onChange={updateForm}
                value={form.gpVisitReason}
              />
            </InlineInput>
          </InlineInputs>
        </div>

        {/* //PAGE 6 Pain Diagram */}

        <div
          className="field6"
          style={{ display: count === 6 ? "flex" : "none" }}
        >
          <h5 className="form-step"> Page {count} of 8 </h5>

          <h1>CONDITION INFO</h1>
          <br />
          <InlineInputs>
            <InlineInput>
              <label>Where is your pain located?</label>
              <input
                type="text"
                className="form-input"
                name="painLocation"
                placeholder="Location"
                onChange={updateForm}
                value={form.painLocation}
              />
            </InlineInput>
          </InlineInputs>

          <Checkboxes>
            <h4>PAIN TYPES</h4>
            <br />
            <CheckboxRow>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="painType"
                    value="Burning"
                    onChange={updateFormMultiple3}
                  />
                  <label>Burning</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="painType"
                    value="Sharp Pain"
                    onChange={updateFormMultiple3}
                  />
                  <label>Sharp Pain</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="painType"
                    value="Stiffness"
                    onChange={updateFormMultiple3}
                  />
                  <label>Stiffness</label>
                </div>
              </CheckboxColumn>
              <CheckboxColumn>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="painType"
                    value="Tingling"
                    onChange={updateFormMultiple3}
                  />
                  <label>Tingling</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="painType"
                    value="Dull Pain"
                    onChange={updateFormMultiple3}
                  />
                  <label>Dull Pain</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="horns"
                    name="painType"
                    value="Numbness"
                    onChange={updateFormMultiple3}
                  />
                  <label>Numbness</label>
                </div>
              </CheckboxColumn>
            </CheckboxRow>
          </Checkboxes>
          <InlineInput>
            <label>
              Using your own words how would you describe the pain you are
              experiencing?
            </label>
            <input
              type="text"
              className="form-input"
              name="painDescription"
              placeholder="Description"
              onChange={updateForm}
              value={form.painDescription}
            />
          </InlineInput>
        </div>

        {/* //PAGE 7 Pain Questions */}

        <div
          className="field7"
          style={{ display: count === 7 ? "flex" : "none" }}
        >
          <h5 className="form-step"> Page {count} of 8 </h5>

          <h1>CONDITION INFO CONTINUED</h1>
          <br />
          <InlineInputDropdown>
            <label> Is your complaint: </label>

            <select name="painOccurs" onChange={updateForm}>
              <option id="horns" value="Constant">
                Constant
              </option>

              <option id="horns" value="Intermittent">
                Intermittent
              </option>

              <option id="horns" value="Activity Based">
                Activity Based
              </option>
            </select>
            <br />
          </InlineInputDropdown>

          <InlineInput>
            <label>
              What aggravates your complaint to come on or increase?
            </label>
            <input
              type="text"
              className="form-input"
              name="painAggravate"
              placeholder="Aggravated By"
              onChange={updateForm}
              value={form.painAggravate}
            />
          </InlineInput>
          <InlineInput>
            <label>What relieves your complaint or helps it?</label>
            <input
              type="text"
              className="form-input"
              name="painRelief"
              placeholder="Relieved By"
              onChange={updateForm}
              value={form.painRelief}
            />
          </InlineInput>
          <InlineInput>
            <label>When and how did this complaint begin?</label>
            <input
              type="text"
              className="form-input"
              name="painHistory"
              placeholder="Pain History"
              onChange={updateForm}
              value={form.painHistory}
            />
          </InlineInput>
          <InlineInputDropdown>
            <label> Is the condition progressively getting worse? </label>

            <select name="painWorsening" onChange={updateForm}>
              <option id="horns" value="No">
                No
              </option>

              <option id="horns" value="Yes">
                Yes
              </option>
            </select>
          </InlineInputDropdown>
          <br />
          <InlineInput>
            <label>How frequently is your complaint present?</label>
            <input
              type="text"
              className="form-input"
              name="painFrequency"
              placeholder="Pain Frequency"
              onChange={updateForm}
              value={form.painFrequency}
            />
          </InlineInput>
          <InlineInput>
            <label>How long does it last?</label>
            <input
              type="text"
              className="form-input"
              name="painLength"
              placeholder="Pain Duration"
              onChange={updateForm}
              value={form.painLength}
            />
          </InlineInput>

          <InlineInputDropdown>
            <label>
              Please describe the severity of your pain on the scale below of 1
              to 10: <br />
              (0 = No pain) <br />(10 = Worst possible pain imaginable)
            </label>

            <select name="painLevel" onChange={updateForm}>
              <option id="painlevel1" value="1">
                1
              </option>

              <option id="painlevel2" value="2">
                2
              </option>
              <option id="painlevel3" value="3">
                3
              </option>
              <option id="painlevel4" value="4">
                4
              </option>
              <option id="painlevel5" value="5">
                5
              </option>
              <option id="painlevel6" value="6">
                6
              </option>
              <option id="painlevel7" value="7">
                7
              </option>
              <option id="painlevel8" value="8">
                8
              </option>
              <option id="painlevel9" value="9">
                9
              </option>
              <option id="painlevel10" value="10">
                10
              </option>
            </select>
          </InlineInputDropdown>

          <br />
        </div>

        {/* //PAGE 8 Consent and Disclaimer */}

        <div
          className="field8"
          style={{ display: count === 8 ? "flex" : "none" }}
        >
          <h5 className="form-step"> Page {count} of 8 </h5>
          <h1>CONSENT AND DISCLAIMER </h1>
          <br />
          <p>
            <strong>
              Please read carefully through the following form and sign your
              name at the bottom:
            </strong>
          </p>
          <br />
          <p>
            I (Patient's Name) fully understand that thorough and honest
            responses to these questions are essential to my safety.{" "}
          </p>
          <br />
          <p>
            I hereby confirm that the information stated above is accurate to
            the best of my ability and I undertake to inform my practitioner of
            any changes.
          </p>
          <br />
          <p>
            I hereby consent to be examined and treated with Hijama and/or
            manual therapy treatment.
          </p>{" "}
          <br />
          <p>
            I am aware that as with any treatment modality there are risks and
            side effects that may occur as a result of receiving treatment.{" "}
          </p>{" "}
          <br />
          <p>
            {" "}
            I have been informed of these risks including the
            relatively small risk of infection, scarring, post treatment
            soreness, lethargy and fainting.{" "}
          </p>{" "}
          <br />
          <p>
            I am also aware that I may experience discomfort during the
            treatment and that I have the full right and ability to cease
            treatment at any point.{" "}
          </p>
          <br />
          <p>I have read and agree with the above paragraph.</p>
          <br />
          <SignConsent>
            <InlineInput>
              <label> Patient's Name </label>
              <input
                type="text"
                className="form-input"
                name="consentName"
                id="consentName"
                placeholder="Name"
                onChange={updateForm}
                value={form.consentName}
              />
            </InlineInput>
            <InlineInput>
              <label> Signed On </label>
              <input
                type="date"
                className="form-input"
                name="consentDate"
                id="consentDate"
                placeholder=""
                onChange={updateForm}
                value={form.consentDate}
              />
            </InlineInput>
          </SignConsent>
        </div>

        {/* PAGE 9 SUBMITTED PAGE */}

        <div
          className="field9"
          style={{ display: count === 9 ? "flex" : "none" }}
        >
          <h5 className="form-step"> Health Form Complete </h5>
          <CompleteIcon>
            <TickIcon />
          </CompleteIcon>
          <h1>HEALTH FORM SUBMITTED</h1>
          <br />

          <p>
            Thank you for completing the health form.
          </p>
          <br/>

        </div>

        {/* SUBMIT button */}
        {count === 8 ? (
          <SubmitButtonWrap>
            <button type="submit" id="submitBtn" className="submitBtn">
              {" "}
              Submit Form
            </button>
          </SubmitButtonWrap>
        ) : null}
      </form>
      {/* end of form */}

      <ButtonRow>
        {count < 9 && (
          <button
            className="prevBtn"
            type="submit"
            onClick={prevPage} //decrease the page count
            disabled={count <= 1} //don't do anytying when the page is the first page
          >
            {" "}
            PREV{" "}
          </button>
        )}
        {count === 9 && (
          <a className="homeBtn" href="/">
            {" "}
            HOME{" "}
          </a>
        )}

        {count < 8 && (
          <button
            className="nextBtn"
            type="submit"
            onClick={nextPage}
            disabled={count >= 8} //at the last page, disable the next button
          >
            {" "}
            NEXT{" "}
          </button>
        )}
      </ButtonRow>
    </FormContainer>
    // end of form-box
  );
}
