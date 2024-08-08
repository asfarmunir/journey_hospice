export const service  = [
    {
        title: 'Physician',
        description:'We have physicians board certified in hospice. That means they are experts in pain and symptom management due to life-limiting illness and at the end of life. They are available around the clock for consultation and to address symptoms.',
        image: '/physician.png'
    },
    {
        title: 'Nurses',
        description: 'Our team includes RN’s and LVN’s who perform a variety of roles from care coordination to care management, direct patient care to directorship. Journey Hospice also has a team of after-hours nurses who can advise over the phone or make a home visit if necessary.',
        image: '/nurse.png'
    },
    {
        title: 'Social Workers',
        description: 'Our masters-level medical social workers help address emotional needs and overall wellbeing of the patient and family, as well as navigating the many decisions that they face at end of life. Social workers can help facilitate difficult family discussions, find resources, advocate for the patient & family, assist with placement needs, and much more.',
        image: '/worker.png'
    },
    {
        title: 'Spiritual Coordinators',
        description: 'Concerns of spiritual or existential nature are common for people facing the end of life. Journey Hospice’s spiritual coordinators help address these concerns. Our spiritual coordinators don’t push any agenda or force religion on anyone. Instead, they support each person on their own journey.',
        image: '/helper.png'
    },
    {
        title: 'Volunteers',
        description: 'Hospice has always valued the role of volunteers. Journey Hospice sees our volunteers as core team members, vital for quality care. Our volunteers may help with running errands, joining a patient for an activity, or simply be someone to talk to. That can be surprisingly beneficial. ',
        image: '/volunteer.png'
    },
   
]

export const scrollToSection = (section: string, offset = 100) => {
  const el = document.getElementById(section);
  console.log(section);
  if (el) {
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};