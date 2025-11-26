import './App.css'
import MainLayout from './layout/MainLayout'
import LoginLayout from './layout/LoginLayout'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RentPage from './pages/RentPage'
import PendingPage from './pages/PendingPage'
import HistoryPage from './pages/HistoryPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import type { JSX } from 'react'

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginLayout><LoginPage /></LoginLayout>} />
            <Route
              path="/"
              element={
                <MainLayout>
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                </MainLayout>
              }
            />
            <Route
              path="/rent"
              element={
                <MainLayout>
                  <ProtectedRoute>
                    <RentPage />
                  </ProtectedRoute>
                </MainLayout>
              }
            />
            <Route
              path="/pending"
              element={
                <MainLayout>
                  <ProtectedRoute>
                    <PendingPage />
                  </ProtectedRoute>
                </MainLayout>
              }
            />
            <Route
              path="/history"
              element={
                <MainLayout>
                  <ProtectedRoute>
                    <HistoryPage />
                  </ProtectedRoute>
                </MainLayout>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
