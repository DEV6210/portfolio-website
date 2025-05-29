'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'QR Codes Scanner',
      description: 'QR Scanner & Barcode Reader, your all-in-one tool for fast, smart, and easy scanning and creation.',
      tech: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile Apps',
      image: 'https://play-lh.googleusercontent.com/2opYITd5rVsFz3KgWEjSoNKXVNKby3uoCB8hApvNADuCAuTdvqFjXGMm_oASWmXei0c=w832-h470-rw',
      link: 'https://play.google.com/store/apps/details?id=com.thecodezenofficial.qrcodescanner'
    },
    {
      title: 'Legalflix - Movie Search Site',
      description: 'Guidance on legal movie downloads and OTT (Over-The-Top) streaming services.',
      tech: ['React', 'IMDB  Movie Api', 'Adsterra'],
      category: 'Web Apps',
      image: 'https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/68179d212a4274d56748ecfd/screenshot_2025-05-04-17-00-21-0000.webp&fit=cover&h=500&q=40&w=800',
      link: 'https://legalflix.netlify.app/'
    },
    {
      title: 'Clink',
      description: 'The Worlds First Educational Social Network,Discover colleges from around the world.',
      tech: ['Java', 'NodeJs', 'MongoDB', 'Realm', 'AWS'],
      category: 'Mobile Apps',
      image: 'https://play-lh.googleusercontent.com/agSKjuYxKF9ocC9LAMVKzmmvZEQ6Ws2rrfPDF14foxHLFI4JeOa71Qm1OboJ5nQtf77r=w832-h470-rw',
      link: 'https://play.google.com/store/apps/details?id=in.theclink.clink'
    },
    {
      title: 'Work Blend - Job Search App',
      description: 'Designed to connect job seekers with new opportunities and employers with outstanding talent.',
      tech: ['React Native', 'NodeJs', 'MongoDB'],
      category: 'Mobile Apps',
      image: 'https://cdn3.f-cdn.com//files/download/232266315/iWASA4JpVNJy_1024_500.png?width=780&height=380&fit=crop',
      link: 'https://play.google.com/store/apps/details?id=com.workblend'
    },
    {
      title: 'Rangini - AI Photo Enhancer',
      description: 'Enhance any image with our cutting-edge AI technology.',
      tech: ['ReactJs', 'Tensorflow', 'Tailwind CSS'],
      category: 'Web Apps',
      image: 'https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/681a35458b5e2a03e2122777/screenshot_2025-05-06-16-14-00-0000.webp&fit=cover&h=500&q=40&w=800',
      link: 'https://rangini.netlify.app/'
    },
    {
      title: 'Life Insurance Pioneers',
      description: 'Empowering insurance advisors through world-class training and support.',
      tech: ['Python', 'NLP', 'FastAPI', 'OpenAI'],
      category: 'Mobile Apps',
      image: 'https://play-lh.googleusercontent.com/ZY2KRry95-t-gG5noEm2V3Pzxt6Q_-OR08iPhT1AJ_eMqGcR3Cjk5H-ET8AA4q0OkQ=w832-h470-rw',
      link: 'https://play.google.com/store/apps/details?id=com.coremacasia.lip'
    },
    {
      title: 'Hospital Booking Managenet System',
      description: 'MRS Hospital - Online Booking. Name, Address, Phone, Email, Gender.',
      tech: ['React Js', 'Node Js', 'Express Js', 'MySQL'],
      category: 'Web Apps',
      image: 'https://private-user-images.githubusercontent.com/91625966/448498057-4b39565a-f071-49fe-a7c6-0554eefab882.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTE2NzgsIm5iZiI6MTc0ODQ1MTM3OCwicGF0aCI6Ii85MTYyNTk2Ni80NDg0OTgwNTctNGIzOTU2NWEtZjA3MS00OWZlLWE3YzYtMDU1NGVlZmFiODgyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI4VDE2NTYxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE3NTVkZDdjOGM5OWE2MDRhNTQxOTdjMDlhNDFiNWI0OGZhODZiMjU2Y2Q2MGM2NDBkNzljMmM2YTdlZDgwYmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.8AX_3a34WNSYECC2eJ5LkAYemPiMwA8OdU7TzlVSUyI',
      link: 'https://booking.mrshospital.org/'
    },
    {
      title: 'Pioneers of LIC',
      description: 'Insurance advisors with the mission to uplift the profession of insurance ...',
      tech: ['React Js', 'Node Js', 'Express Js', 'MySQL'],
      category: 'Web Apps',
      image: 'https://private-user-images.githubusercontent.com/91625966/448499816-c408a5b9-66ca-4828-b1d9-4ba0b4535a3c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTE4ODQsIm5iZiI6MTc0ODQ1MTU4NCwicGF0aCI6Ii85MTYyNTk2Ni80NDg0OTk4MTYtYzQwOGE1YjktNjZjYS00ODI4LWIxZDktNGJhMGI0NTM1YTNjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI4VDE2NTk0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTczMjhhN2IwMmJjNmQyODI1OGE0ZjNmNTNhMTdiZjI3MjMxYzljMDFmNzY3NDllNzY5NjgzNjM4ZDNmMGYzZWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.0GSrUWeftyYneyvZyCP8ZX1geTIBfxi4-1U96tFHWHQ',
      link: 'https://pioneersoflic.com/'
    },
    {
      title: 'Jya Trades',
      description: 'At Jya Trades, we are committed to helping you achieve financial success.',
      tech: ['React Js', 'Node Js', 'Express Js', 'MySQL'],
      category: 'Web Apps',
      image: 'https://private-user-images.githubusercontent.com/91625966/448504854-543fa423-e77f-48c0-8ca0-2a266eb6f805.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTI1MDEsIm5iZiI6MTc0ODQ1MjIwMSwicGF0aCI6Ii85MTYyNTk2Ni80NDg1MDQ4NTQtNTQzZmE0MjMtZTc3Zi00OGMwLThjYTAtMmEyNjZlYjZmODA1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI4VDE3MTAwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE2Y2Q0ZWFjZDEzMjk5ZGYyMDkyNTMzYzhlMjlhMDAwOWVmZTRlYjFmNWE3MTZkYjQ5MDRjMjM3NGQ5NThkYTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.OUUMEGf2hOwYzCPtdnoIrM6MJO_emaIcPBpAvqlBDMw',
      link: 'https://jyatrades.com/'
    },
    {
      title: 'Dr. Anjali Gupta',
      description: 'Expertise in a wide range of orthopedic treatments and procedures.',
      tech: ['React Js', 'NodeJs', 'MySQL'],
      category: 'Web Apps',
      image: 'https://private-user-images.githubusercontent.com/91625966/448518013-0578e82e-becf-46c0-8dc0-46eb6c9fc5fe.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTUxMDMsIm5iZiI6MTc0ODQ1NDgwMywicGF0aCI6Ii85MTYyNTk2Ni80NDg1MTgwMTMtMDU3OGU4MmUtYmVjZi00NmMwLThkYzAtNDZlYjZjOWZjNWZlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI4VDE3NTMyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYyMDJlZWVkNzA1ODdhZDBjNjViOWE2YTBlMTQ3YjkyMzg1NDllYWM3YWUxMWFmZWE1Y2ViYjVjNzRmZWI3ODImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.yg3UsYlaRD4pPQvkajg1ysvoK5d60nr76TNJzgZdqGY',
      link: 'https://my.doctorezy.in/d0078'
    },
    {
      title: 'DoctorEzy',
      description: 'DoctorEzy provides doctors with personalized apps and websites to enhance their online presence',
      tech: ['Wordpress'],
      category: 'Web Apps',
      image: 'https://private-user-images.githubusercontent.com/91625966/448519449-a52c0ca2-9923-4b6f-82c7-c0666cc22a96.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTUxMDMsIm5iZiI6MTc0ODQ1NDgwMywicGF0aCI6Ii85MTYyNTk2Ni80NDg1MTk0NDktYTUyYzBjYTItOTkyMy00YjZmLTgyYzctYzA2NjZjYzIyYTk2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI4VDE3NTMyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2OGFiZjc5MTEzODFjMGViZDA1MGU1ZTBmZDMzOGExZmY2MzRmYTQxNTg1NTVjYzlmNDhkMTAyNzFiMTNiNTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.mPcoqTwkIO6ZYGBy-NtVbYYSCybpcXcAAJNj0juSO6Y',
      link: 'https://doctorezy.in/about-us/'
    },
    {
      title: 'DoctorEzy - Book Appointments',
      description: 'Book appointments with the best doctors near you in just a few clicks..',
      tech: ['React Js', 'NodeJs', 'ExpressJs', 'MySQL'],
      category: 'Web Apps',
      image: 'https://private-user-images.githubusercontent.com/91625966/448518989-45ec6a92-7d65-493e-b306-18cd08158c84.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTU2MDgsIm5iZiI6MTc0ODQ1NTMwOCwicGF0aCI6Ii85MTYyNTk2Ni80NDg1MTg5ODktNDVlYzZhOTItN2Q2NS00OTNlLWIzMDYtMThjZDA4MTU4Yzg0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI4VDE4MDE0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA1Y2U4MmZlY2NlYmYzNzZiYzE4YTNhOWI3NDczNTllOTVhODEzNDA4Yzc0YjRiY2Q5ZDQ0YjFjODNlZWMxY2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.sVZ4hxXAzpwBRAjy4DtgBT8ZjxIjjoxFR2-AZ6kyGHA',
      link: 'https://doctorezy.in/doctors/'
    },
    {
      title: 'Reward King - Gaming App',
      description: 'Designe for Earning money through Google Admob, User friendly interface Spin while, Solve Puzzle.',
      tech: ['React Native', 'AdMob', 'NodeJs', 'MongoDB'],
      category: 'Mobile Apps',
      image: 'https://cdn3.f-cdn.com//files/download/229691788/qceIRBhQUsii_1024_500.png?width=780&height=380&fit=crop',
      link: 'https://www.freelancer.com/u/fullstackcoderx/portfolio/rewared-king-12134040?w=f&redirect-times=1&ngsw-bypass='
    },
    {
      title: 'EMart - Ecommerce Web App',
      description: 'The platform is fully responsive, ensuring a seamless experience on monitors, tablets, and laptops.',
      tech: ['MERN- Fullstack', 'NodeJs', 'MongoDB'],
      category: 'Web Apps',
      image: 'https://cdn3.f-cdn.com//files/download/224041830/1.png?width=780&height=438&fit=crop',
      link: 'https://github.com/DEV6210/Ecommerce-Website'
    },
    {
      title: 'Online Voting Management System',
      description: 'The Online Voting Management System, developed for college minor Project studies.',
      tech: ['Python', 'Tkinter', 'SQLite'],
      category: 'Desktop/PC Software',
      image: 'https://cdn3.f-cdn.com//files/download/224041222/1.png?width=780&height=438&fit=crop',
      link: 'https://github.com/DEV6210/Online-Voting-Management-System'
    },
    {
      title: 'Ecommerce - Online Shopping',
      description: 'The platform is fully responsive, ensuring a seamless experience on monitors, tablets, and laptops.',
      tech: ['HTML', 'CSS', 'PHP', 'SQL'],
      category: 'Web Apps',
      image: 'https://user-images.githubusercontent.com/91625966/193314820-24e3b1b6-27e9-47ed-b699-d25024e24b55.png',
      link: 'https://github.com/DEV6210/Online-Shopping-WebApplication'
    },
    {
      title: 'Diabetes Prediction System',
      description: 'Assist in early detection and awareness of diabetes through a modern, web-based interface.',
      tech: ['React Js', 'Python', 'AI/ML'],
      category: 'Web Apps',
      image: 'https://private-user-images.githubusercontent.com/91625966/441300411-1d7b2df8-3b31-4f8f-8200-fdcceededc85.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTAyMzYsIm5iZiI6MTc0ODQ0OTkzNiwicGF0aCI6Ii85MTYyNTk2Ni80NDEzMDA0MTEtMWQ3YjJkZjgtM2IzMS00ZjhmLTgyMDAtZmRjY2VlZGVkYzg1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI4VDE2MzIxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJjYzdhMjA4MTllODg3NWFlYjQ5NDBjOWY4ZjJhYmEyNWE3Y2QzNGQ5NTkxNmQxMmI3ZjI5YzkyNGYyYzc5ZWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.pgTyVO0GIsF7oYx2sdAvlYMu3GCA8BEZyzex897pMqk',
      link: 'https://github.com/DEV6210/Diabetes-Prediction-System-Using-Machine-Learning'
    },
    {
      title: 'Work Blend - Job Search Portal',
      description: 'Designed to connect job seekers with new opportunities and employers with outstanding talent.',
      tech: ['React Js', 'Node Js', 'Express Js', 'MongoDB'],
      category: 'Web Apps',
      image: 'https://cdn3.f-cdn.com//files/download/232268026/1.png?width=780&height=438&fit=crop',
      link: 'https://www.freelancer.com/u/fullstackcoderx/portfolio/work-blend-jobportal-and-freelancing-onboarding-platform-12218549?w=f&redirect-times=1&ngsw-bypass='
    },
    {
      title: 'And - Social Media App',
      description: 'Social Media app Build using React Native with a MongoDB database is a dynamic and modern project.',
      tech: ['React Native', 'Nodejs', 'Express Js', 'MongoDB'],
      category: 'Mobile Apps',
      image: 'https://private-user-images.githubusercontent.com/91625966/282492250-3f7a5ec5-d8f2-4073-b243-1f71d226e3ec.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTQ2MzEsIm5iZiI6MTc0ODQ1NDMzMSwicGF0aCI6Ii85MTYyNTk2Ni8yODI0OTIyNTAtM2Y3YTVlYzUtZDhmMi00MDczLWIyNDMtMWY3MWQyMjZlM2VjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI4VDE3NDUzMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRkYjAxZWViOGM5NTJkYjcxYjViMTU3M2NiZjIwYzA2OTA2NGQyOThmZjI0ZmM0MjczNWM5OWYxNzgzMjU1NzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.NMj8O4ddb350G9dLKB05XQYjTbwuKii7DfiPs1M_pZc',
      link: 'https://github.com/DEV6210/ReactNative'
    },
    {
      title: 'Code Market',
      description: 'Marketplace for buying and selling project source code, templates, and digital assets.',
      tech: ['Next Js', 'MongoDB'],
      category: 'Web Apps',
      image: 'https://private-user-images.githubusercontent.com/91625966/340673922-9391c705-91ff-4c24-8609-611b143a052a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0NTQ0OTAsIm5iZiI6MTc0ODQ1NDE5MCwicGF0aCI6Ii85MTYyNTk2Ni8zNDA2NzM5MjItOTM5MWM3MDUtOTFmZi00YzI0LTg2MDktNjExYjE0M2EwNTJhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI4VDE3NDMxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmOTgyZTdiNTVmZmZiMTY4OWQyNmM1MzZjZTIyMTZkY2I3NjRmMTMxNWFhOWVmMmI4ZjFhMzM0YzBmODVjOGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.vUEZ0aTqvHk8-T7YW8AxjFqnkB9GSmNCFKvnm7pt9ks',
      link: 'https://github.com/DEV6210/codemarket'
    }
  ];

  const categories = ['All', 'Desktop/PC Software', 'Mobile Apps', 'Web Apps'];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-cyber-purple">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the innovative solutions I've built to automate processes, enhance productivity, and solve real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(6);
              }}
              variant={category === selectedCategory ? 'default' : 'outline'}
              className={`px-6 py-2 transition-all duration-200 ${category === selectedCategory
                ? 'bg-tech-gradient text-white'
                : 'border-gray-300 hover:border-tech-blue hover:text-tech-blue'
                }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border-0 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-cyber-purple text-white text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-tech-blue group-hover:text-cyber-purple transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => { window.open(project.link, '_blank'); }}
                  variant="outline"
                  className="w-full border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-200"
                >
                  <Link className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="bg-cyber-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white px-8 py-3"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
