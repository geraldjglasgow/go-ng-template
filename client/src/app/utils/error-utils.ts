export class ErrorUtils {
    static errorMap: Record<string, { title: string; description: string }> = {
      '400': {
        title: 'Bad Request',
        description: 'The server could not understand the request due to invalid syntax.'
      },
      '401': {
        title: 'Unauthorized',
        description: 'You are not authorized to access this resource. Please login first.'
      },
      '403': {
        title: 'Forbidden',
        description: 'You do not have permission to perform this action.'
      },
      '404': {
        title: 'Not Found',
        description: 'The requested resource could not be found on the server.'
      },
      '500': {
        title: 'Internal Server Error',
        description: 'An unexpected error occurred on the server. Please try again later.'
      },
      'default': {
        title: 'Unknown Error',
        description: 'An unexpected error occurred. Please contact support if the issue persists.'
      }
    };
  
    static mapError(error: { code?: string; message?: string }): { title: string; description: string } {
        if (!error) {
          return {
            title: 'Error',
            description: 'An unknown error occurred.'
          };
        }
    
        if (error.code && this.errorMap[error.code]) {
          return this.errorMap[error.code];
        }
    
        if (error.message) {
          const matchingError = Object.entries(this.errorMap).find(([key, value]) => {
            return error.message!.includes(key);
          });
    
          if (matchingError) {
            return matchingError[1];
          }
        }
    
        return this.errorMap['default'];
      }
  }
  