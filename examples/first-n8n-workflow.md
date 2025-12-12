# Example: Build an Email-AI Drafting Agent with n8n

This example walks through a minimal n8n workflow: when a new email arrives, summarize and draft a suggested reply with OpenAI, then save to Airtable.

## Goal
- Watch a Gmail inbox for new messages.
- Detect if email is priority (contains 'Urgent').
- Use OpenAI to draft a reply.
- Save the email content and suggested reply to Airtable.

## Nodes
1. Webhook/IMAP/Gmail Trigger (e.g., Gmail Trigger node)
   - Trigger on new email received.
2. IF (Filter) node
   - Check: subject contains 'Urgent'
3. OpenAI (Chat) node
   - Prompt: "Summarize the email in two sentences and draft a brief reply in a polite tone."
   - Inputs: email body
4. Airtable Create Record node
   - Save fields: from, subject, summary, draft_reply
5. Optional Email Send node
   - Send draft for approval or directly reply.

## Example Prompt
"You are an assistant that summarizes messages and drafts empathetic professional replies. Summarize in two sentences and draft a short reply under 80 words." 

## Export (n8n JSON)
_Paste your exported workflow for n8n here or use this minimal pseudo-JSON as a template:_

```
{
  "nodes": [
    { "type": "n8n-nodes-base.gmailTrigger", "parameters": { "filterCriteria": { "subject": "Urgent" } } },
    { "type": "n8n-nodes-base.if", "parameters": { "conditions": { "string": [{ "value1": "={{$json[\"subject\"]}}", "operation": "contains", "value2": "Urgent" }] } } },
    { "type": "n8n-nodes-base.openai", "parameters": { "prompt": "Summarize and draft reply: {{$json[\"body\"]}}" } },
    { "type": "n8n-nodes-base.airtable", "parameters": { "operation": "create", "fields": { "subject": "={{$json[\"subject\"]}}", "summary": "={{$node[\"OpenAI\"].json[\"summary\"]}}", "draft": "={{$node[\"OpenAI\"].json[\"reply\"]}}" } } }
  ]
}
```

## Notes
- Don't forget to configure API keys as environment variables in n8n (OpenAI, Airtable, Gmail OAuth). Do not store keys in the repo.
- This is a simple pattern. Extend with retries, error handling, and rate limiting.
