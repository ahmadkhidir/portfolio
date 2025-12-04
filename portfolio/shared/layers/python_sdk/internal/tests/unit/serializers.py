from unittest import TestCase, main
from internal.tables.serializers.user import *
from internal.tables.serializers.chatbot import *


class TestUserSerializer(TestCase):
    def test_user_serializer_valid_data(self):
        data = {
            "username": "testuser",
            "sub": "1234567890",
            "email": "testuser@example.com",
            "given_name": "Test",
            "gender": "male",
            "groups": ["lawyer"],
        }
        user = UserSerializer.model_validate(data)
        print(user)
        print(user.model_dump(by_alias=True))
        self.assertIsInstance(UserSerializer.model_validate(data), UserSerializer)
    
    def test_chat_message_input(self):
        payload = {'message': 'Hello'}
        chat_input = ChatbotChatMessageInputSerializer(**payload)
        self.assertIsInstance(chat_input, ChatbotChatMessageInputSerializer)



if __name__ == "__main__":
    main()