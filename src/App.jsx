import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import PageLayout  from "./components/PageLayout";
import Welcome from "./pages/onboarding/Welcome";

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
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Onboarding */}
      <Route
      path="/onboarding/purpose"
      element={<Welcome />}
      />

      <Route
        path="/onboarding/tasbih"
        element={<ComingSoon title="Tasbih" />}
      />

      <Route
        path="/onboarding/duas"
        element={<ComingSoon title="Duas" />}
      />

      <Route
        path="/onboarding/stories"
        element={<ComingSoon title="Stories" />}
      />

      <Route
        path="/onboarding/language"
        element={<ComingSoon title="Choose Language" />}
      />

      <Route
        path="/onboarding/preferences"
        element={<ComingSoon title="Preferences" />}
      />

      <Route
        path="/onboarding/notifications"
        element={<ComingSoon title="Notifications" />}
      />

      <Route
        path="/onboarding/notification-permission"
        element={<ComingSoon title="Notification Permission" />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<ComingSoon title="Welcome to Aamaal" />}
      />

      <Route
        path="/forgot-password"
        element={<ComingSoon title="Account Recovery" />}
      />

      {/* Account and Family */}
      <Route
        path="/account"
        element={<ComingSoon title="My Account" />}
      />

      <Route
        path="/account/profile"
        element={<ComingSoon title="Personal Profile" />}
      />

      <Route
        path="/account/family"
        element={<ComingSoon title="Family Profiles" />}
      />

      <Route
        path="/account/family/add"
        element={<ComingSoon title="Add Family Member" />}
      />

      <Route
        path="/account/family/:profileId"
        element={<ComingSoon title="Family Member Details" />}
      />

      <Route
        path="/account/family/:profileId/edit"
        element={<ComingSoon title="Edit Family Member" />}
      />

      <Route
        path="/account/family/:profileId/aamaal"
        element={<ComingSoon title="Family Member Aamaal" />}
      />

      <Route
        path="/account/family/:profileId/remove"
        element={<ComingSoon title="Remove Family Member" />}
      />

      <Route
        path="/account/security"
        element={<ComingSoon title="Security and Privacy" />}
      />

      <Route
        path="/logout"
        element={<ComingSoon title="Sign Out" />}
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
