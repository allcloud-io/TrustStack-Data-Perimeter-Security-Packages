# Markdown Cursor (.mdc) File Format

## Overview

The Markdown Cursor (.mdc) file format is a specialized Markdown-based documentation format used in Cursor IDE to define coding standards, best practices, and guidelines. These files serve as "Cursor Rules" that help the AI assistant understand project-specific conventions and provide more contextually relevant assistance.

## Purpose

Markdown Cursor files serve several key purposes:

1. **Knowledge Base**: They act as a structured knowledge base that the Cursor AI can reference when providing coding assistance.
2. **Coding Standards**: They define project-specific coding standards and best practices.
3. **Contextual Guidance**: They provide context about how code should be structured, formatted, and documented.
4. **AI Instruction**: They guide the AI in making recommendations that align with your team's preferred practices.

## File Structure

A typical .mdc file follows this structure:

````markdown
# Title of the Rule

This rule provides guidance on [specific topic].

## Introduction

A brief introduction explaining the purpose and importance of this rule.

## Main Sections

Detailed explanations of the rule, often divided into multiple sections.

### Subsections

More specific details about particular aspects of the rule.

## Examples

```python
# Code examples demonstrating the rule in practice
def example_function():
    """Example docstring following the rule."""
    pass
```
````

## Best Practices

1. **Practice One**: Description of the first best practice.
2. **Practice Two**: Description of the second best practice.

## Key Components

Markdown Cursor files typically include:

1. **Rule Name and Description**: A clear title and description of what the rule covers.
2. **Structured Sections**: Well-organized sections with headings that break down the topic.
3. **Code Examples**: Practical examples showing how to apply the rule.
4. **Do's and Don'ts**: Often presented as "✅ Modern" vs "❌ Deprecated" examples.
5. **Tables**: For comparing different approaches or summarizing information.
6. **Best Practices**: Numbered or bulleted lists of recommended practices.

## Integration with Cursor IDE

When working in Cursor IDE:

1. Rules are automatically attached to conversations when relevant files are opened.
2. The AI can fetch specific rules when they're relevant to the current task.
3. Rules can be referenced by name in conversations with the AI.
4. The AI uses these rules to provide more contextually appropriate suggestions.

## Creating Effective .mdc Files

To create effective Markdown Cursor files:

1. **Be Specific**: Focus each rule on a single, well-defined topic.
2. **Provide Context**: Explain not just what to do, but why it matters.
3. **Include Examples**: Show both good and bad examples to illustrate the rule.
4. **Use Markdown Features**: Leverage headings, code blocks, tables, and formatting.
5. **Keep Updated**: Maintain rules as standards evolve.

## Example Use Cases

Markdown Cursor files are particularly useful for:

- Language-specific coding standards
- Documentation requirements
- Type system conventions
- Testing methodologies
- Project architecture guidelines
- Security best practices
- Performance optimization guidelines

## Relationship to Other Documentation

While similar to regular Markdown (.md) files, .mdc files are specifically designed to be referenced by the Cursor AI. They complement other documentation by providing AI-accessible guidance that shapes how the assistant interacts with your codebase.
