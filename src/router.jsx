import { createBrowserRouter, redirect, useParams } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout.jsx';

import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import CourseDetailsStudent from './pages/CourseDetailsStudent.jsx';
import CourseDetailsTeacher from './pages/CourseDetailsTeacher.jsx';
import Announcement from './pages/Announcement.jsx';
import Participants from './pages/Participants.jsx';
import AssignmentPortal from './pages/AssignmentPortal.jsx';
import StudentAssignments from './pages/StudentAssignments.jsx';
import VideoCallStudent from './pages/VideoCallStudent.jsx';
import VideoCallTeacher from './pages/VideoCallTeacher.jsx';
import PrepMate from './pages/PrepMate.jsx';
import PrepMateChat from './pages/PrepMateChat.jsx';
import ImageToText from './pages/ImageToText.jsx';
import PdfToAudio from './pages/PdfToAudio.jsx';
import PlagiarismChecker from './pages/PlagiarismChecker.jsx';
import CvGenerator from './pages/CvGenerator.jsx';
import ProfileEdit from './pages/ProfileEdit.jsx';

const ROLES = ['student', 'teacher', 'admin'];
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/** Render a different page depending on the :role in the URL (admin falls back to teacher). */
function byRole(views) {
  return function RoleView() {
    const { role } = useParams();
    const View = views[role] ?? views.teacher;
    return <View />;
  };
}

const Dashboard = byRole({ student: StudentDashboard, teacher: TeacherDashboard, admin: AdminDashboard });
const CourseDetails = byRole({ student: CourseDetailsStudent, teacher: CourseDetailsTeacher });
const Assignments = byRole({ student: StudentAssignments, teacher: AssignmentPortal });
const LiveClass = byRole({ student: VideoCallStudent, teacher: VideoCallTeacher });

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <Login /> },
  {
    path: '/:role',
    element: <DashboardLayout />,
    loader: ({ params }) => (ROLES.includes(params.role) ? null : redirect('/login')),
    children: [
      { index: true, element: <Dashboard />, handle: { title: (role) => `${cap(role)} Dashboard` } },
      { path: 'course', element: <CourseDetails />, handle: { title: (role) => (role === 'student' ? 'Course Details' : 'Course Edit') } },
      { path: 'assignments', element: <Assignments />, handle: { title: 'Assignment' } },
      { path: 'live-class', element: <LiveClass />, handle: { title: 'Live Class' } },
      { path: 'announcement', element: <Announcement />, handle: { title: 'Edit Announcement' } },
      { path: 'participants', element: <Participants />, handle: { title: 'Participate' } },
      { path: 'prepmate', element: <PrepMate />, handle: { title: 'PrepMate', mainClass: 'bg-white h-[700px]', hideScrollbar: true } },
      { path: 'prepmate/chat', element: <PrepMateChat />, handle: { title: 'PrepMate Chat', hideScrollbar: true } },
      { path: 'image-to-text', element: <ImageToText />, handle: { title: 'Image to Text' } },
      { path: 'pdf-to-audio', element: <PdfToAudio />, handle: { title: 'PDF to Audio' } },
      { path: 'plagiarism-checker', element: <PlagiarismChecker />, handle: { title: 'Plagiarism Checker' } },
      { path: 'cv-generator', element: <CvGenerator />, handle: { title: 'CV Generator', hideScrollbar: true } },
      { path: 'profile', element: <ProfileEdit />, handle: { title: 'Edit Profile', hideScrollbar: true } },
    ],
  },
  { path: '*', loader: () => redirect('/') },
]);

export default router;
