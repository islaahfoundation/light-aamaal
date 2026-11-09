import { Routes, Route, Navigate } from "react-router-dom";
/*Components*/
import PageLayout  from "./components/PageLayout";
/*pages.Home*/
import Home from "./pages/home/Home";
/*pages.Onboarding */
import AccountRecovery from "./pages/onboarding/AccountRecovery";
import Authentication from "./pages/onboarding/Authentication";
import DuaIntro from "./pages/onboarding/DuaIntro";
import LanguageSelection from "./pages/onboarding/LanguageSelection";
import NotificationIntro from "./pages/onboarding/NotificationIntro";
import NotificationPermission from "./pages/onboarding/NotificationPermission";
import Preferences from "./pages/onboarding/Preferences";
import Purpose from "./pages/onboarding/Purpose";
import Splash from "./pages/onboarding/Splash";
import StoriesIntro from "./pages/onboarding/StoriesIntro";
import TasbihIntro from "./pages/onboarding/TasbihIntro";
import Welcome from "./pages/onboarding/Welcome";
/*pages.Account */
import AccountDashboard from "./pages/account/AccountDashboard";
import AccountSecurity from "./pages/account/AccountSecurity";
import AddFamilyMember from "./pages/account/AddFamilyMember";
import EditFamilyMember from "./pages/account/EditFamilyMember";
import FamilyMemberAamaal from "./pages/account/FamilyMemberAamaal";
import FamilyMemberDetails from "./pages/account/FamilyMemberDetails";
import FamilySelector from "./pages/account/FamilySelector";
import LogoutConfirmation from "./pages/account/LogoutConfirmation";
import PersonalProfile from "./pages/account/PersonalProfile";
import RemoveFamilyMember from "./pages/account/RemoveFamilyMember";

function ComingSoon({ title }) {
  return (
    <main className="page-placeholder">
      <div className="placeholder-logo">Aamaal</div>

      <h1>{title}</h1>

      <p>Live with Purpose</p>

      <span>Building your spiritual journey...</span>
    </main>
  );
}

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/home" element={<Home />} />

      {/* Onboarding */}
      <Route
      path="/onboarding/purpose"
      element={<Purpose />}
      />

      <Route
        path="/onboarding/tasbih"
        element={<TasbihIntro />}
      />

      <Route
        path="/onboarding/duas"
        element={<DuaIntro />}
      />

      <Route
        path="/onboarding/stories"
        element={<StoriesIntro />}
      />

      <Route
        path="/onboarding/language"
        element={<LanguageSelection />}
      />

      <Route
        path="/onboarding/preferences"
        element={<Preferences />}
      />

      <Route
        path="/onboarding/notifications"
        element={<NotificationIntro />}
      />

      <Route
        path="/onboarding/notification-permission"
        element={<NotificationPermission />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<Authentication />}
      />

      <Route
        path="/forgot-password"
        element={<AccountRecovery />}
      />

      {/* Account and Family */}
      <Route
        path="/account"
        element={<ComingSoon title="My Account" />}
      />

      <Route
        path="/account/profile"
        element={<PersonalProfile />}
      />

      <Route
        path="/account/family"
        element={<FamilySelector />}
      />

      <Route
        path="/account/family/add"
        element={<AddFamilyMember />}
      />

      <Route
        path="/account/family/:profileId"
        element={<FamilyMemberDetails />}
      />

      <Route
        path="/account/family/:profileId/edit"
        element={<EditFamilyMember />}
      />

      <Route
        path="/account/family/:profileId/aamaal"
        element={<FamilyMemberAamaal />}
      />

      <Route
        path="/account/family/:profileId/remove"
        element={<RemoveFamilyMember />}
      />

      <Route
        path="/account/security"
        element={<ComingSoon title="Security and Privacy" />}
      />

      <Route
        path="/logout"
        element={<LogoutConfirmation />}
      />

      {/* Home Dashboard */}
      <Route
        path="/home"
        element={
        <PageLayout showHeader={false} showBottomNav={false}>
          <Home/>
          </PageLayout>
          }
      />

      <Route
        path="/home/profile-switcher"
        element={<ComingSoon title="Switch Profile" />}
      />

      <Route
        path="/search"
        element={<ComingSoon title="Search Aamaal" />}
      />

      <Route
        path="/progress"
        element={<ComingSoon title="Today's Progress" />}
      />

      <Route
        path="/more"
        element={<ComingSoon title="Explore Aamaal" />}
      />

      {/* Tasbih */}
      <Route
        path="/tasbih"
        element={<ComingSoon title="Digital Tasbih" />}
      />

      {/* Duas */}
      <Route
        path="/duas"
        element={<ComingSoon title="Dua Library" />}
      />

      <Route
        path="/duas/featured"
        element={<ComingSoon title="Featured Dua" />}
      />

      {/* Stories */}
      <Route
        path="/stories"
        element={<ComingSoon title="Stories and Reflections" />}
      />

      {/* Notifications */}
      <Route
        path="/notifications"
        element={<ComingSoon title="Notifications" />}
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={<ComingSoon title="Settings" />}
      />

      {/* Fallback */}
      <Route
        path="*"
        element={<ComingSoon title="Page Not Found" />}
      />
    </Routes>
  );
}

export default App;
