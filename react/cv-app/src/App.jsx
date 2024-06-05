import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import { Form } from './components/Form';
import { ResumePreview } from './components/ResumePreview';
import { BackgroundCard } from './components/forms/BackgroundCard';
import { EducationCard } from './components/forms/EducationCard';
import { ExperienceCard } from './components/forms/ExperienceCard';
import Header from './components/preview/Header';
import Section from './components/preview/PreviewSection';

function App() {
  // Background
  const [name, setName] = useState('Daniel Perez');
  const [address, setAddress] = useState('1234 5th St Los Angeles, CA');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [phone, setPhone] = useState('(310)867-5309');

  // Education
  const [schoolValue, setSchoolValue] = useState('USC');
  const [degreeValue, setDegreeValue] = useState('B.S. Biology');
  const [start, setStart] = useState('2016');
  const [end, setEnd] = useState('2020');
  const [locationValue, setLocationValue] = useState('Westwood');
  const [description, setDescription] = useState('Write something')

  // Experience
  const [company, setCompany] = useState('UCLA');
  const [location, setLocation] = useState('Westwood');
  const [positionValue, setPositionValue] = useState('Library Assistant');
  const [startValue, setStartValue] = useState('2018');
  const [endValue, setEndValue] = useState('2020');
  const [descriptionValue, setDescriptionValue] = useState('Love it');

  // Card Functionality
  const [activeCard, setActiveCard] = useState(null);
  const handleCardClick = (title) => {
      setActiveCard(activeCard === title ? null : title)
  }

  return (
    <div className='grid grid-cols-3 bg-gray-400'>
      <Form>
        <Card title='Personal Info' isActive={activeCard === "Personal Info"} onCardClick={handleCardClick}>
          <BackgroundCard
            name={name}
            setName={setName}
            address={address}
            setAddress={setAddress}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
        </Card>
        <Card title="Education" isActive={activeCard === "Education"} onCardClick={handleCardClick}>
          <EducationCard 
            schoolValue={schoolValue}
            setSchoolValue={setSchoolValue}
            degreeValue={degreeValue}
            setDegreeValue={setDegreeValue}
            start={start}
            setStart={setStart}
            end={end}
            setEnd={setEnd}
            locationValue={locationValue}
            setLocationValue={setLocationValue}
            description={description}
            setDescription={setDescription}
          />
        </Card>
        <Card title="Experience" isActive={activeCard === "Experience"} onCardClick={handleCardClick}>
          <ExperienceCard 
            company={company}
            setCompany={setCompany}
            location={location}
            setLocation={setLocation}
            positionValue={positionValue}
            setPositionValue={setPositionValue}
            startValue={startValue}
            setStartValue={setStartValue}
            endValue={endValue}
            setEndValue={setEndValue}
            descriptionValue={descriptionValue}
            setDescriptionValue={setDescriptionValue}/>
        </Card>
      </Form>
      <ResumePreview>
        <Header 
          name={name}
          address={address}
          email={email}
          phone={phone}
          description={description}
        />
        <Section subheading='Education' 
          company={schoolValue}
          location={locationValue}
          position={degreeValue}
          start={start}
          end={end}
        />
        <Section subheading='Experience' 
          company={company}
          position={positionValue}
          location={location}
          start={startValue}
          end={endValue}
          description={descriptionValue}
        />
      </ResumePreview>
    </div>
    
  )
}

export default App