const Task = require('../models/Task');
const taskController = require('../controllers/taskController');

jest.mock('../models/Task');

describe('Task Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();  // 
  });

  // Test for getTasks
  describe('getTasks', () => {
    it('should return all tasks for a user', async () => {
      const req = { userId: 'testUser' };  // Simulate request object with userId
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Mock tasks data that would be returned from the database
      const mockTasks = [
        { _id: 'task1', title: 'Task 1', userId: 'testUser' },
        { _id: 'task2', title: 'Task 2', userId: 'testUser' },
      ];

      // Mock Task.find to return the mock tasks
      Task.find.mockResolvedValue(mockTasks);

      // Call the controller method
      await taskController.getTasks(req, res);

      expect(Task.find).toHaveBeenCalledWith({ userId: 'testUser' });

      // Ensure res.status(200)
      expect(res.status).toHaveBeenCalledWith(200);

      // Ensure res.json
      expect(res.json).toHaveBeenCalledWith(mockTasks);
    });

    it('should return 500 when there is a server error', async () => {
      const req = { userId: 'testUser' };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      Task.find.mockRejectedValue(new Error('Database error'));

      // Call the controller method
      await taskController.getTasks(req, res);

      // Ensure res.status(500)
      expect(res.status).toHaveBeenCalledWith(500);

      // Ensure res.json
      expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
    });
  });
});
