import { mockDelay, mockUsers } from '../data';

// Mock auth handlers
export const authHandlers = {
  // Login handler
  login: async (credentials) => {
    await mockDelay(800);
    
    const { email, password } = credentials;
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    return {
      success: true,
      data: {
        token: 'mock_jwt_token_' + Date.now(),
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          avatar: user.avatar,
        },
      },
    };
  },
  
  // Signup handler
  signup: async (userData) => {
    await mockDelay(1000);
    
    const { email, phone } = userData;
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email || u.phone === phone);
    if (existingUser) {
      throw new Error('User already exists with this email or phone');
    }
    
    return {
      success: true,
      data: {
        message: 'OTP sent to your email and phone',
        otp: '123456', // Mock OTP for testing
      },
    };
  },
  
  // Verify OTP handler
  verifyOtp: async (otpData) => {
    await mockDelay(600);
    
    const { otp, expectedOtp } = otpData;
    
    if (otp !== expectedOtp) {
      throw new Error('Invalid OTP');
    }
    
    return {
      success: true,
      data: {
        message: 'OTP verified successfully',
        verified: true,
      },
    };
  },
  
  // Resend OTP handler
  resendOtp: async () => {
    await mockDelay(500);
    
    return {
      success: true,
      data: {
        message: 'OTP resent successfully',
        otp: '123456', // Mock OTP for testing
      },
    };
  },
  
  // Logout handler
  logout: async () => {
    await mockDelay(300);
    
    return {
      success: true,
      data: {
        message: 'Logged out successfully',
      },
    };
  },
  
  // Forgot password handler
  forgotPassword: async (email) => {
    await mockDelay(700);
    
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      throw new Error('No user found with this email');
    }
    
    return {
      success: true,
      data: {
        message: 'Password reset link sent to your email',
      },
    };
  },
  
  // Reset password handler
  resetPassword: async (resetData) => {
    await mockDelay(800);
    
    const { token, newPassword } = resetData;
    
    if (!token || !newPassword) {
      throw new Error('Invalid reset data');
    }
    
    return {
      success: true,
      data: {
        message: 'Password reset successfully',
      },
    };
  },
};
