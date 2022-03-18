import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 100vh;
  background-color: #330033;

  form {
    margin-top: 50px;

  }

  h5 {
    text-align: right;
    color: #12b886;
  }

  .field1 {
    background-color: white;
    padding: 10px 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 80vw;
 


  }

  .field2 {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 10px 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 80vw;

  }
  .field3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 10px 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 80vw;
  }
  .field4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 10px 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 80vw;
  }

  .field5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 10px 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 80vw;
  }

  .field6 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 10px 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 80vw;
  }

  .field7 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 10px 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 80vw;
  }

  .field8 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 10px 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 80vw;
  }

  input {
    padding: 15px;
    margin: 10px 0px;
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

const ButtonRow = styled.div`
  display: flex;
  button {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: #12b886;
    color: white;
    border-radius: 100px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
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
    livesWith: "",
    otherTreatment: "",

    smoker: "",
    perDay: "",
    smokerYears: "",
    exSmoker: "",
    dateQuit: "",
    exSmokerYears: "",

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

    painActivity: "",
    painAggrevate: "",
    painRelief: "",
    painHistory: "",
    painWorsening: "",
    painFrequency: "",
    painLevel: "",

    consentName: "",
    consentDate: ""
  


  });

  const [count, setCount] = useState(1);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target);
    console.log(form);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkiueyg",
        "template_88ba2c7",
        e.target,
        "user_rh5YFofV2laZtochZOHKD"
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
  };

  return (
    <FormContainer>
      <form onSubmit={sendEmail}>
        <div
          className="field1"
          style={{ display: count === 1 ? "flex" : "none" }}
        >
          <h5 className="form-step"> steps: {count} of 8 </h5>
          <br />
          <h1>Patient Detals</h1> <br />
          <InlineInputs>
            <InlineInput>
              <label>Title</label>
              <input
                type="text"
                className="form-input"
                name="title"
                placeholder="Title"
                onChange={updateForm}
                value={form.title}
              />
            </InlineInput>

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
                placeholder="Phone +44..."
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
          <label> When is your first session booked for? </label>
          <input
            type="date"
            className="form-input"
            name="firstSession"
            placeholder=""
            onChange={updateForm}
            value={form.firstSession}
          />
        </div>

        <div
          className="field2"
          style={{ display: count === 2 ? "flex" : "none" }}
        >
          <h5 className="form-step"> steps: {count} of 8 </h5>

          <h1>Patient Details 2</h1>
          <br />
          <label> How did you hear about the clinic? </label>
          <input
            type="text"
            className="form-input"
            name="heardAbout"
            placeholder="How did you hear about the clinic?"
            onChange={updateForm}
            value={form.heardAbout}
          />
          <label> What are your hopes and expectations? </label>
          <input
            type="text"
            className="form-input"
            name="expectations"
            placeholder="What are your hope and expectations?"
            onChange={updateForm}
            value={form.expectations}
          />

          <label> What is your current occupation? </label>
          <input
            type="text"
            className="form-input"
            name="occupation"
            placeholder="What are your hope and expectations?"
            onChange={updateForm}
            value={form.occupation}
          />

          <label> Do you play any sports? How often? </label>
          <input
            type="text"
            className="form-input"
            name="sports"
            placeholder="What are your hope and expectations?"
            onChange={updateForm}
            value={form.sports}
          />

          <label> Who do you live at home with? </label>
          <input
            type="text"
            className="form-input"
            name="livesWith"
            placeholder="What are your hope and expectations?"
            onChange={updateForm}
            value={form.livesWith}
          />

          <label>
            {" "}
            Have you ever sought after anyother form of manual therapy for your
            current condition(s)?{" "}
          </label>
          <input
            type="text"
            className="form-input"
            name="otherTreatment"
            placeholder="What are your hope and expectations?"
            onChange={updateForm}
            value={form.otherTreatment}
          />
        </div>

        <div
          className="field3"
          style={{ display: count === 3 ? "flex" : "none" }}
        >
          <h5 className="form-step"> steps: {count} of 8 </h5>

          <h1>Health Screen</h1>
          <br />
          <label> Are you a smoker? </label>
          <input
            type="text"
            className="form-input"
            name="smoker"
            placeholder="How did you hear about the clinic?"
            onChange={updateForm}
            value={form.smoker}
          />
          <label> How many per day? </label>
          <input
            type="number"
            className="form-input"
            name="perDay"
            placeholder="What are your hope and expectations?"
            onChange={updateForm}
            value={form.perDay}
          />

          <label> How many years? </label>
          <input
            type="text"
            className="form-input"
            name="smokerYears"
            placeholder="What are your hope and expectations?"
            onChange={updateForm}
            value={form.smokerYears}
          />

          <label> If you are an ex-smoker, when did you quit? </label>
          <input
            type="text"
            className="form-input"
            name="exSmoker"
            placeholder="What are your hope and expectations?"
            onChange={updateForm}
            value={form.exSmoker}
          />


        </div>

        <div
          className="field4"
          style={{ display: count === 4 ? "flex" : "none" }}
        >
          <h5 className="form-step"> steps: {count} of 8 </h5>

          <h1>Health Screen Part 2</h1>

          <label> Have you ever suffered from any of the following? </label>

          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label>Scales</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label>Horns</label>
          </div>

          <label>Do you take any medication? </label>
          <p>Yes/no</p>
          <input
            type="text"
            className="form-input"
            name="medicationCurrent"
            placeholder="Current"
            onChange={updateForm}
            value={form.medicationCurrent}
          />
          <input
            type="text"
            className="form-input"
            name="medicationPast"
            placeholder="Past"
            onChange={updateForm}
            value={form.medicationPast}
          />
          <label>Do you suffer from any other health problems? </label>
          <p>Yes/no</p>
          <input
            type="text"
            className="form-input"
            name="otherConditions1"
            placeholder="What are your hope and expectations?"
            onChange={updateForm}
            value={form.otherConditions1}
          />
        </div>

        <div
          className="field5"
          style={{ display: count === 5 ? "flex" : "none" }}
        >
          <h5 className="form-step"> steps: {count} of 8 </h5>
          <h1>Medical History and Review of Systems</h1>
          <p>
            Please mark below if you suffer with or have previously suffered
            with any of the following health problems:
          </p>
          <h4>CARDIO-RESPIRATORY</h4>
          -heart problem -high blood pressure -dizziness on standing up -high
          cholesterol -chest pains -breathlessness/wheezing -poor circulation
          -persistent cough -asthma/bronchitis -other
          <h4>DIGESTIVE</h4>
          -heart burn -indigestion -stomach ulcer -bloatedness -liver problems
          -constipation
          <h4>PSYCHOSOCIAL</h4>
          -Stress -Anxiety -Nervousness -Depression -Psychiatric Disorders -Mood
          Swings -Other
          <h4>GENITOURINARY</h4>
          -Difficulty passing urine -Water Infections -Problems controlling
          urine -Frequent urination -Kidney problems -Enlarged prostate
          -Reproductive problems -Other
          <h4>HEAD & ENT </h4>
          -Visual disturbances -Loss of balance -Vertigo -Migraine -Headaches
          -Sinitis -Polyps -Hearing Problems -Other
          <h4>ENDOCRINE </h4>
          -Diabetes -Thyroid problems -Lack of energy -Hot flushes -Restlessness
          -Irritability -Sleeping problems -Loss of appetite -Other
          <h4>ORTHOPAEDIC </h4>
          -Arthritis -Broken bones -Hot swollen joints -Backpain - Leg pain -Leg
          numbness -Neck pain -Arm pain -arm numbess -joint pains -muscle
          weakness -muscle pain -shoulder problems -tennis elbow -wrist pain
          -sprains/strains -cramps -gout -other
          <h4>DERMATOLOGICAL </h4>
          -Eczema/Psoriasis -Bleeding/Unusual moles -Shingles -Poor healing
          -Boils -Dry skin -Allergies -Other
        </div>

        <div
          className="field6"
          style={{ display: count === 6 ? "flex" : "none" }}
        >
          <h5 className="form-step"> steps: {count} of 8 </h5>

          <h1>Pain Diagram</h1>
          <p>
            On the drawings below please indicate where you are experiencing
            pain by drawing the symbol(s) on the diagram that most accurately
            reflect the type of discomfort you have been experiencing
          </p>
          <p>
            {" "}
            Using your own words how would you describe the pain you are
            experiencing? Pain Types: Burning Sharp Pain Stiffness Tingling Dull
            Pain Numbness
          </p>
        </div>

        <div
          className="field7"
          style={{ display: count === 7 ? "flex" : "none" }}
        >
          <h5 className="form-step"> steps: {count} of 8 </h5>

          <h1>Pain Questions</h1>
          <p>
          Is your complaint: Constant / Intermittent / Activity Based

What aggravates your complaint to come on or increase?

What relives your complaint or helps it?

When and how did this complaint begin? (Complaint History)

Is the condition progressively getting worse? Y/N
How frequent is your complaint present? How long does it last?

Please descibe the severity of your pain on the scale below of 1 to 10
(0=no pain) (10= worst possible pain imaginable)
0 1 2 3 4 5 6 7 8 9 10
          </p>
        </div>

        <div
          className="field8"
          style={{ display: count === 8 ? "flex" : "none" }}
        >
          <h5 className="form-step"> steps: {count} of 8 </h5>

          <h1>Consent and Disclaimer </h1>
          <p>
            {" "}
            I (Patient's Name) fully understand that thorough and honest
            responses to these questions are essential to my safety. I hereby
            confirm that the information stated above is accurate to the best of
            my ability and I undertake to inform my practitioner of any changes.{" "}
          </p>
          <br />
          <p>
            I hereby consent to be examined and treated with Hijama and/or
            manual therapy treatment. I am aware that as with any treatment
            modality there are risks and side effects that may occur as a result
            of receiving treatment. I have been verbally informed of these risks
            including the relatively small risk of infection, scarring, post
            treatment soreness, lethargy and fainting. I am also aware that I
            may experience discomfort during the treatment and that I have the
            full right and ability to cease treatment at any point.{" "}
          </p>
          <br />
          <p>I have read and agree with the above paragraph</p>
          <br />
          <div className="signConsent">
            <label> Patient's Name </label>
            <input
              type="text"
              className="form-input"
              name="consentName"
              placeholder=""
              onChange={updateForm}
              value={form.consentName}
            />

            <label> Signed On </label>
            <input
              type="date"
              className="form-input"
              name="consentDate"
              placeholder=""
              onChange={updateForm}
              value={form.consentDate}
            />
          </div>
        </div>

        {/* SUBMIT button */}
        {count === 8 ? (
          <button type="submit" id="submitBtn" className="submitBtn">
            {" "}
            submit
          </button>
        ) : null}
      </form>
      {/* end of form */}

      <ButtonRow>
        {count > 1 && (
          <button
            className="prevBtn"
            type="submit"
            onClick={() => setCount(count - 1)} //decrease the page count
            disabled={count <= 1} //don't do anytying when the page is the first page
          >
            {" "}
            PREV{" "}
          </button>
        )}

        {count < 8 && (
          <button
            className="nextBtn"
            type="submit"
            onClick={() => setCount(count + 1)}
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
