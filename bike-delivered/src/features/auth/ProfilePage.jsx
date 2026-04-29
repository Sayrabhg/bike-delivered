import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateProfile, clearError } from '../../store/slices/authSlice';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import { formatPhone } from '../../utils/formatting';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.auth);
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) dispatch(clearError());
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    try {
      await dispatch(updateProfile(formData)).unwrap();
      setIsEditing(false);
    } catch (err) {
      // Error handled by Redux
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate('/');
    } catch (err) {
      // Error handled by Redux
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card className="p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-600 to-accent-600 text-white flex items-center justify-center font-display font-bold text-3xl mx-auto mb-4">
              {user.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{user.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{user.email}</p>
            
            <div className="space-y-2">
              <Button
                variant={isEditing ? 'secondary' : 'primary'}
                fullWidth
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel Edit' : 'Edit Profile'}
              </Button>
              <Button
                variant="outline"
                fullWidth
                onClick={handleLogout}
                loading={loading}
              >
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </Button>
            </div>
          </Card>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {isEditing ? 'Edit Profile' : 'Profile Information'}
              </h3>
              {!isEditing && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </Button>
              )}
            </div>

            {error && (
              <div className="mb-4 p-3 bg-error-50 border border-error-200 rounded-lg">
                <p className="text-sm text-error-600">{error}</p>
              </div>
            )}

            {isEditing ? (
              <form onSubmit={handleUpdateProfile}>
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                />

                <div className="flex space-x-3 mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    loading={loading}
                  >
                    Save Changes
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    fullWidth
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-500 mb-1 block">
                    Full Name
                  </label>
                  <p className="text-gray-900 font-medium">{user.name || 'Not set'}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 mb-1 block">
                    Email Address
                  </label>
                  <p className="text-gray-900 font-medium">{user.email || 'Not set'}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 mb-1 block">
                    Phone Number
                  </label>
                  <p className="text-gray-900 font-medium">
                    {user.phone ? formatPhone(user.phone) : 'Not set'}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 mb-1 block">
                    Account Type
                  </label>
                  <p className="text-gray-900 font-medium capitalize">{user.role || 'Customer'}</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
