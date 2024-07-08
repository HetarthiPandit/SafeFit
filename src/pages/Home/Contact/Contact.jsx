import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import logo from "../../../../public/favicon.png";
import GoogleMap from "google-maps-react-markers";

// Marker Component
const CustomMarker = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
    <div
    className="relative top-[-40px] flex items-center justify-center bg-blue-600 text-white font-bold p-5 rounded-full shadow-lg w-10 h-10"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <img src={logo} alt="logo" className="w-7 h-5" />
    {isHovered && (
      <div className="absolute bottom-full mb-2 w-max p-2 bg-blue-600 text-white text-sm rounded-lg shadow-lg z-10">
        {text}
      </div>
    )}
  </div>
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-blue-600"></div>
    </div>
  );
};

const handleRedirect = () => {
  window.scrollTo(0, 0); // Scroll to top when the component mounts
};

const Contact = () => {
  useEffect(() => {
    handleRedirect();
  }, []);

  const mapStyles = {
    height: "100%",
    width: "100%"
  };

  const countryCodes = [
    { country: "Afghanistan", code: "+93" },
    { country: "Albania", code: "+355" },
    { country: "Algeria", code: "+213" },
    { country: "American Samoa", code: "+1-684" },
    { country: "Andorra", code: "+376" },
    { country: "Angola", code: "+244" },
    { country: "Anguilla", code: "+1-264" },
    { country: "Antarctica", code: "+672" },
    { country: "Antigua and Barbuda", code: "+1-268" },
    { country: "Argentina", code: "+54" },
    { country: "Armenia", code: "+374" },
    { country: "Aruba", code: "+297" },
    { country: "Australia", code: "+61" },
    { country: "Austria", code: "+43" },
    { country: "Azerbaijan", code: "+994" },
    { country: "Bahamas", code: "+1-242" },
    { country: "Bahrain", code: "+973" },
    { country: "Bangladesh", code: "+880" },
    { country: "Barbados", code: "+1-246" },
    { country: "Belarus", code: "+375" },
    { country: "Belgium", code: "+32" },
    { country: "Belize", code: "+501" },
    { country: "Benin", code: "+229" },
    { country: "Bermuda", code: "+1-441" },
    { country: "Bhutan", code: "+975" },
    { country: "Bolivia", code: "+591" },
    { country: "Bosnia and Herzegovina", code: "+387" },
    { country: "Botswana", code: "+267" },
    { country: "Brazil", code: "+55" },
    { country: "British Indian Ocean Territory", code: "+246" },
    { country: "British Virgin Islands", code: "+1-284" },
    { country: "Brunei", code: "+673" },
    { country: "Bulgaria", code: "+359" },
    { country: "Burkina Faso", code: "+226" },
    { country: "Burundi", code: "+257" },
    { country: "Cambodia", code: "+855" },
    { country: "Cameroon", code: "+237" },
    { country: "Canada", code: "+1" },
    { country: "Cape Verde", code: "+238" },
    { country: "Cayman Islands", code: "+1-345" },
    { country: "Central African Republic", code: "+236" },
    { country: "Chad", code: "+235" },
    { country: "Chile", code: "+56" },
    { country: "China", code: "+86" },
    { country: "Christmas Island", code: "+61" },
    { country: "Cocos Islands", code: "+61" },
    { country: "Colombia", code: "+57" },
    { country: "Comoros", code: "+269" },
    { country: "Cook Islands", code: "+682" },
    { country: "Costa Rica", code: "+506" },
    { country: "Croatia", code: "+385" },
    { country: "Cuba", code: "+53" },
    { country: "Curacao", code: "+599" },
    { country: "Cyprus", code: "+357" },
    { country: "Czech Republic", code: "+420" },
    { country: "Democratic Republic of the Congo", code: "+243" },
    { country: "Denmark", code: "+45" },
    { country: "Djibouti", code: "+253" },
    { country: "Dominica", code: "+1-767" },
    { country: "Dominican Republic", code: "+1-809, +1-829, +1-849" },
    { country: "East Timor", code: "+670" },
    { country: "Ecuador", code: "+593" },
    { country: "Egypt", code: "+20" },
    { country: "El Salvador", code: "+503" },
    { country: "Equatorial Guinea", code: "+240" },
    { country: "Eritrea", code: "+291" },
    { country: "Estonia", code: "+372" },
    { country: "Eswatini", code: "+268" },
    { country: "Ethiopia", code: "+251" },
    { country: "Falkland Islands", code: "+500" },
    { country: "Faroe Islands", code: "+298" },
    { country: "Fiji", code: "+679" },
    { country: "Finland", code: "+358" },
    { country: "France", code: "+33" },
    { country: "French Polynesia", code: "+689" },
    { country: "Gabon", code: "+241" },
    { country: "Gambia", code: "+220" },
    { country: "Georgia", code: "+995" },
    { country: "Germany", code: "+49" },
    { country: "Ghana", code: "+233" },
    { country: "Gibraltar", code: "+350" },
    { country: "Greece", code: "+30" },
    { country: "Greenland", code: "+299" },
    { country: "Grenada", code: "+1-473" },
    { country: "Guam", code: "+1-671" },
    { country: "Guatemala", code: "+502" },
    { country: "Guernsey", code: "+44-1481" },
    { country: "Guinea", code: "+224" },
    { country: "Guinea-Bissau", code: "+245" },
    { country: "Guyana", code: "+592" },
    { country: "Haiti", code: "+509" },
    { country: "Honduras", code: "+504" },
    { country: "Hong Kong", code: "+852" },
    { country: "Hungary", code: "+36" },
    { country: "Iceland", code: "+354" },
    { country: "India", code: "+91" },
    { country: "Indonesia", code: "+62" },
    { country: "Iran", code: "+98" },
    { country: "Iraq", code: "+964" },
    { country: "Ireland", code: "+353" },
    { country: "Isle of Man", code: "+44-1624" },
    { country: "Israel", code: "+972" },
    { country: "Italy", code: "+39" },
    { country: "Ivory Coast", code: "+225" },
    { country: "Jamaica", code: "+1-876" },
    { country: "Japan", code: "+81" },
    { country: "Jersey", code: "+44-1534" },
    { country: "Jordan", code: "+962" },
    { country: "Kazakhstan", code: "+7" },
    { country: "Kenya", code: "+254" },
    { country: "Kiribati", code: "+686" },
    { country: "Kosovo", code: "+383" },
    { country: "Kuwait", code: "+965" },
    { country: "Kyrgyzstan", code: "+996" },
    { country: "Laos", code: "+856" },
    { country: "Latvia", code: "+371" },
    { country: "Lebanon", code: "+961" },
    { country: "Lesotho", code: "+266" },
    { country: "Liberia", code: "+231" },
    { country: "Libya", code: "+218" },
    { country: "Liechtenstein", code: "+423" },
    { country: "Lithuania", code: "+370" },
    { country: "Luxembourg", code: "+352" },
    { country: "Macau", code: "+853" },
    { country: "Madagascar", code: "+261" },
    { country: "Malawi", code: "+265" },
    { country: "Malaysia", code: "+60" },
    { country: "Maldives", code: "+960" },
    { country: "Mali", code: "+223" },
    { country: "Malta", code: "+356" },
    { country: "Marshall Islands", code: "+692" },
    { country: "Mauritania", code: "+222" },
    { country: "Mauritius", code: "+230" },
    { country: "Mayotte", code: "+262" },
    { country: "Mexico", code: "+52" },
    { country: "Micronesia", code: "+691" },
    { country: "Moldova", code: "+373" },
    { country: "Monaco", code: "+377" },
    { country: "Mongolia", code: "+976" },
    { country: "Montenegro", code: "+382" },
    { country: "Montserrat", code: "+1-664" },
    { country: "Morocco", code: "+212" },
    { country: "Mozambique", code: "+258" },
    { country: "Myanmar", code: "+95" },
    { country: "Namibia", code: "+264" },
    { country: "Nauru", code: "+674" },
    { country: "Nepal", code: "+977" },
    { country: "Netherlands", code: "+31" },
    { country: "Netherlands Antilles", code: "+599" },
    { country: "New Caledonia", code: "+687" },
    { country: "New Zealand", code: "+64" },
    { country: "Nicaragua", code: "+505" },
    { country: "Niger", code: "+227" },
    { country: "Nigeria", code: "+234" },
    { country: "Niue", code: "+683" },
    { country: "United Arab Emirates", code: "+971" },
  ];


  const [selectedCode, setSelectedCode] = useState('+971');
  const handleChange = (event) => {
    setSelectedCode(event.target.value);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    number: Yup.string().required('Contact Number is required'),
    city: Yup.string().required('City is required'),
    area: Yup.string().required('Area is required'),
    interestedIn: Yup.string().required('Please select an interest'),
    studio: Yup.string().required('Please select a starting time'),
    arabicPreferred: Yup.string().required('Please select an option'),
    message: Yup.string().required('Message is required'),
  });

  const token = import.meta.env.VITE_APP_TOKEN;
  const getTrainer = import.meta.env.VITE_CONTACT_API;

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(getTrainer, values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        alert('Your message has been sent successfully');
        resetForm();
      } else {
        alert('Failed to send your message, please try again later');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred, please try again later');
    }
    setSubmitting(false);
  };

  const markers = [
    { lat: 25.1865102, lng: 55.2767362, title: 'SafeFit - South Ridge' },
    { lat: 25.0294878, lng: 55.2679518, title: 'SafeFit - Arabian Ranches 2' }
  ];

  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [zoom, setZoom] = useState(10);

  const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  const onMarkerClick = (e, { markerId, lat, lng }) => {
    mapRef.current.setCenter({ lat, lng });
  };

  useEffect(() => {
    const updateZoomLevel = () => {
      if (window.innerWidth < 768) {
        setZoom(9); // Mobile zoom level
      } else {
        setZoom(9); // Web zoom level
      }
    };

    updateZoomLevel();
    window.addEventListener('resize', updateZoomLevel);

    return () => {
      window.removeEventListener('resize', updateZoomLevel);
    };
  }, []);

  return (
    <>
      <section className="container pb-7 mx-auto md:py-20 w-full">
        <div className="xl:flex lg:flex lg:rounded-[25px] lg:max-w-[1380px] lg:border overflow-hidden">
          <div className="lg:w-1/2 lg:px-12 py-10 w-full h-full lg:rounded-tr-none lg:bg-white font-lexend">
            <div>
              <h1 className="font-[Manrope] text-3xl sm:text-4xl sm:text-[54px] font-semibold sm:mt-6 mt-2">
                Get in touch with us
              </h1>
              <div className="">
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    number: '',
                    city: '',
                    area: '',
                    interestedIn: '',
                    studio: '',
                    arabicPreferred: 'no',
                    message: '',
                    recaptcha: ''
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, setFieldValue }) => (
                    <Form >
                      <div className="mt-6">
                        <label className="block text-sm font-light mb-2">
                          Full Name*
                        </label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Enter Your Full Name"
                          className="block w-full border text-sm font-light border-[#D7D7D7] focus-visible:outline-[#D7D7D7] rounded-lg p-2 bg-[#F5F8FA]"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
                      </div>
                      <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4 space-y-5 sm:space-y-0">
                        <div className="sm:w-1/2 w-full">
                          <label className="block text-sm font-light mb-2">
                            Email*
                          </label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="block w-full border text-sm font-light border-[#D7D7D7] focus-visible:outline-[#D7D7D7] rounded-lg p-2 bg-[#F5F8FA]"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div className="sm:w-1/2 w-full">
                          <label className="block text-sm font-light mb-2">
                            Contact Number*
                          </label>
                          <div className="flex items-center relative">
                            <Field
                              as="select"
                              name="countryCode"
                              id="countryCode"
                              className="border w-14 p-[6px] border-[#D7D7D7] rounded-l-lg bg-[#F5F8FA] focus-visible:outline-none border-r-0 appearance-none"
                              value={selectedCode}
                              onChange={handleChange}
                            >
                              {countryCodes.map((countryData, index) => (
                                <option
                                  key={index}
                                  value={countryData.code}
                                  className="h-[40px]"
                                >
                                  {selectedCode === countryData.code
                                    ? countryData.code
                                    : `${countryData.country} (${countryData.code})`}
                                </option>
                              ))}
                            </Field>
                            <Field
                              type="tel"
                              name="number"
                              placeholder="Enter Your Phone Number"
                              className="block w-full border border-l-0 text-sm font-light border-[#D7D7D7] focus-visible:outline-none rounded-r-lg p-2 bg-[#F5F8FA]"
                            />
                            <FontAwesomeIcon
                              icon={faWhatsapp}
                              className="absolute right-3 text-lg top-2.5"
                            />
                          </div>
                          <ErrorMessage name="number" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                      </div>
                      <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4 space-y-5 sm:space-y-0">
                        <div className="sm:w-1/2 w-full">
                          <label className="block text-sm font-light mb-2">
                            City*
                          </label>
                          <Field
                            type="text"
                            name="city"
                            placeholder="City"
                            className="block w-full border text-sm font-light border-[#D7D7D7] focus-visible:outline-[#D7D7D7] rounded-lg p-2 bg-[#F5F8FA]"
                          />
                          <ErrorMessage name="city" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                        <div className="sm:w-1/2 w-full">
                          <label className="block text-sm font-light mb-2">
                            Area*
                          </label>
                          <Field
                            type="text"
                            name="area"
                            placeholder="Area"
                            className="block w-full border text-sm font-light border-[#D7D7D7] focus-visible:outline-[#D7D7D7] rounded-lg p-2 bg-[#F5F8FA]"
                          />
                          <ErrorMessage name="area" component="div" className="text-red-600 text-sm mt-1" />
                        </div>
                      </div>
                      <div className="mt-5">
                        <label className="block text-sm font-light mb-2">
                          Interested In*
                        </label>
                        <Field
                          as="select"
                          name="interestedIn"
                          className="block w-full border text-sm font-light border-[#D7D7D7] focus-visible:outline-none rounded-lg p-2 bg-[#F5F8FA]"
                        >
                          <option value="">Please Select</option>
                          <option value="Coaching Services">Coaching Services</option>
                          <option value="PT Membership">PT Membership</option>
                          <option value="PT Single Session">PT Single Session</option>
                          <option value="About SafeFit">About SafeFit</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Bring your trainer">Bring your trainer</option>
                          <option value="GX class">GX class</option>
                          <option value="Other">Other</option>
                        </Field>
                        <ErrorMessage name="interestedIn" component="div" className="text-red-600 text-sm mt-1" />
                      </div>
                      <div className="mt-5">
                        <label className="block text-sm font-light mb-2">
                          When would you like to start?*
                        </label>
                        <Field
                          as="select"
                          name="studio"
                          className="block w-full border text-sm font-light border-[#D7D7D7] focus-visible:outline-none rounded-lg p-2 bg-[#F5F8FA]"
                        >
                          <option value="">Please Select</option>
                          <option value="As Soon As Possible">As Soon As Possible</option>
                          <option value="Within The Next Week">Within The Next Week</option>
                          <option value="Within The Next 2 Weeks">Within The Next 2 Weeks</option>
                          <option value="Next Month">Next Month</option>
                        </Field>
                        <ErrorMessage name="studio" component="div" className="text-red-600 text-sm mt-1" />
                      </div>
                      <div className="mt-5">
                        <label className="block text-sm font-light mb-2">
                          Prefer Arabic*
                        </label>
                        <div className="flex space-x-6">
                          <div>
                            <Field
                              type="radio"
                              name="arabicPreferred"
                              value="yes"
                              className="mr-2"
                            />
                            Yes
                          </div>
                          <div>
                            <Field
                              type="radio"
                              name="arabicPreferred"
                              value="no"
                              className="mr-2"
                            />
                            No
                          </div>
                        </div>
                        <ErrorMessage name="arabicPreferred" component="div" className="text-red-600 text-sm mt-1" />
                      </div>
                      <div className="mt-5">
                        <label className="block text-sm font-light mb-2">
                          Message*
                        </label>
                        <Field
                          as="textarea"
                          name="message"
                          placeholder="Write your message here"
                          rows="4"
                          className="block w-full border text-sm font-light border-[#D7D7D7] focus-visible:outline-[#D7D7D7] rounded-lg p-2 bg-[#F5F8FA]"
                        />
                        <ErrorMessage name="message" component="div" className="text-red-600 text-sm mt-1" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mt-8 mt-4 sm:gap-6">
                        <div className="mt-5 w-1/2">
                          <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-[300px] sm:h-[600px] lg:h-[1000px] lg:rounded-3xl lg:mb-0 mb-4">
  {mapReady}
      <GoogleMap
        apiKey="AIzaSyDEC8ld2jJ5-uzn7FA201UB-OvLwO6fB74"
        defaultCenter={{  lat:  24.52670996169446, lng:   55.198351835024496 }}
        defaultZoom={zoom}
        mapMinHeight="100vh"
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => console.log('Map moved', map)}
      >
        {markers.map(({ lat, lng, title }, index) => (
          <CustomMarker
            key={index}
            lat={lat}
            lng={lng}
            markerId={title}
            text={title}
            onClick={onMarkerClick}
          />
        ))}
      </GoogleMap>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
