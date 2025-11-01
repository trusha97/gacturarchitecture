import React, { useEffect, useRef, useState } from 'react';
import "./TeamAbout.css";
import { teamimage1, teamimage2, teamimage3 } from '../../utils/images';

const teamMembers = [
  { id: 1, name: "Olivia Johnson", role: "Art Director", image: teamimage1, social: [
    { platform: "facebook-f", url: "#" },
    { platform: "x-twitter", url: "#" },
    { platform: "linkedin-in", url: "#" }
  ]},
  { id: 2, name: "Michael Smith", role: "Lead Designer", image: teamimage2, social: [
    { platform: "facebook-f", url: "#" },
    { platform: "x-twitter", url: "#" },
    { platform: "linkedin-in", url: "#" }
  ]},
  { id: 3, name: "Sophia Lee", role: "UX Specialist", image: teamimage3, social: [
    { platform: "facebook-f", url: "#" },
    { platform: "x-twitter", url: "#" },
    { platform: "linkedin-in", url: "#" }
  ]},
  { id: 4, name: "David Brown", role: "Animator", image: teamimage1, social: [
    { platform: "facebook-f", url: "#" },
    { platform: "x-twitter", url: "#" },
    { platform: "linkedin-in", url: "#" }
  ]},
];

const TeamAbout = () => {
  const [openMemberId, setOpenMemberId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const imageRefs = useRef({});

  // ✅ Animate on scroll using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // ek j vaar animate thavu
          }
        });
      },
      { threshold: 0.3 } // 30% image visible thaya pachi trigger
    );

    teamMembers.forEach(member => {
      if (imageRefs.current[member.id]) {
        observer.observe(imageRefs.current[member.id]);
      }
    });

    return () => {
      teamMembers.forEach(member => {
        if (imageRefs.current[member.id]) {
          observer.unobserve(imageRefs.current[member.id]);
        }
      });
    };
  }, []);

  // ✅ Resize listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Outside click only for desktop
  useEffect(() => {
    const handleClick = (e) => {
      if (!isMobile && openMemberId !== null) {
        if (
          !e.target.closest(".team-image-plus") &&
          !e.target.closest(".social-icons1212")
        ) {
          setOpenMemberId(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openMemberId, isMobile]);

  const toggleIcons = (id) => {
    if (isMobile) return; // 📱 Mobile → ignore toggle (always open all)
    setOpenMemberId((prev) => (prev === id ? null : id)); // 💻 Desktop toggle
  };

  return (
    <div className='team-main-div-section1212'>
      <div className='team-section'>
        {teamMembers.map((member) => (
          <div key={member.id} className='team-image-title-div'>
            <div className="team-inner-div1212">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img
                  ref={el => (imageRefs.current[member.id] = el)}
                  className='team-image'   // 👈 animate class scroll ma add thase
                  src={member.image}
                  alt={member.name}
                />
              </a>

              <div
                className='team-image-plus'
                onClick={() => toggleIcons(member.id)}
              >
                <i className="fas fa-plus"></i>
              </div>

              <div
                className={`social-icons1212 ${
                  isMobile || openMemberId === member.id ? "show" : ""
                }`}
              >
                {member.social.map((item, index) => (
                  <a key={index} className='social-icon-team' href={item.url}>
                    <i className={`fab fa-${item.platform}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className='team-title'>
              <div className='title-div-johnson'>
                <h2 className='team-olivia-text'>{member.name}</h2>
                <h2 className='team-art-text'>{member.role}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAbout;
